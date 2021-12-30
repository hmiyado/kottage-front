import EntryRepository from 'api/entry/entryRepository'
import Button from 'components/atoms/button/button'
import Plus from '../../../components/atoms/button/plus.svg'
import CommentForm from 'components/comment/commentform/commentform'
import EntryComponent, {
  convertEntryToProps,
  EntryProps,
} from 'components/entry/entry'
import TwoColumn from 'components/template/twocolumn/twocolumn'
import { useEffect, useState } from 'react'
import {
  Comments as OpenApiComments,
  Comment as OpenApiComment,
} from 'api/openapi/generated'
import Sentence from 'components/atoms/sentence/sentence'
import { utcToZonedTime } from 'date-fns-tz'
import { dateFormatter } from 'util/dateFormatter'
import commentsStyle from './comments.module.css'

export async function getStaticPaths() {
  const entries = await EntryRepository.getEntries()
  const serialNumbers = entries.items?.map((v) => {
    return { params: { serialNumber: v.serialNumber.toString() } }
  })

  return {
    paths: serialNumbers ? serialNumbers : [],
    fallback: false,
  }
}

export async function getStaticProps({
  params,
}: {
  params: { serialNumber: number }
}) {
  const entry = await EntryRepository.fetchEntry(params.serialNumber)

  return {
    props: {
      entry: convertEntryToProps(entry),
    },
  }
}

export default function EntriesSerialNumberPage({
  entry,
}: {
  entry: EntryProps
}) {
  const [showCommentForm, updateShowCommentForm] = useState(false)
  const [comments, updateComments] = useState<OpenApiComments>({
    totalCount: 0,
    items: [],
  })
  console.log(JSON.stringify(comments))

  useEffect(() => {
    EntryRepository.fetchComments(entry.serialNumber)
      .then((fetchedComments) => {
        updateComments(fetchedComments)
      })
      .catch(() => {
        /* do nothing */
      })
  }, [entry.serialNumber, updateComments])

  const entryForm = (_showCommentForm: boolean) => {
    if (_showCommentForm) {
      return (
        <CommentForm
          onSubmit={(name, body) => {
            EntryRepository.createComment(entry.serialNumber, name, body)
              .then((comment) =>
                updateComments({
                  totalCount: comments.totalCount + 1,
                  items: comments.items.concat([comment]),
                })
              )
              .catch(() => {
                /* do nothing */
              })
            updateShowCommentForm(false)
          }}
          onCancel={() => updateShowCommentForm(false)}
        />
      )
    } else {
      return (
        <Button
          text="COMMENT"
          Icon={Plus}
          onClick={() => updateShowCommentForm(true)}
        />
      )
    }
  }
  const items = comments.items
  items.sort((a, b) => a.id - b.id)

  return (
    <TwoColumn>
      <>
        <EntryComponent props={{ ...entry, className: commentsStyle.entry }} />
        <div className={commentsStyle.container}>
          {items
            .map((comment) => convertCommentToProps(comment))
            .map((comment, index) => {
              return (
                <article key={index}>
                  <Sentence title={''}>{comment.body}</Sentence>
                  <div className={commentsStyle.footer}>
                    <div className={commentsStyle.text}>
                      {comment.createdAt}
                    </div>
                    <div className={commentsStyle.text}>{comment.name}</div>
                  </div>
                </article>
              )
            })}
          <div className={commentsStyle.formContainer}>
            {entryForm(showCommentForm)}
          </div>
        </div>
      </>
    </TwoColumn>
  )
}

interface CommentProps {
  name: string
  body: string
  createdAt: string
}

function convertCommentToProps(openapiComment: OpenApiComment): CommentProps {
  const { createdAt } = openapiComment
  const zonedDateTime = utcToZonedTime(createdAt, 'Asia/Tokyo')
  return {
    name: openapiComment.name,
    body: openapiComment.body,
    createdAt: dateFormatter['YYYY-MM-DDThh:mm:ss+0900'](zonedDateTime),
  }
}
