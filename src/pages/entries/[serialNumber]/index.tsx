import EntryRepository from 'repository/entry/entryRepository'
import { Entry, Entries as OpenApiEntries } from 'repository/openapi/generated'
import { convertEntryToProps, EntryProps } from 'components/plurals/entry/entry'
import { Ogp } from 'components/plurals/template/layout/layout'
import TwoColumn from 'components/plurals/template/twocolumn/twocolumn'
import Entries from 'components/presentation/entries/entries'
import { GetStaticPaths } from 'next'
import Head from 'next/head'
import { Constants } from '../../../util/constants'

export const getStaticPaths: GetStaticPaths = async () => {
  const { totalCount, items } = await EntryRepository.getEntries()
  const requests: Promise<OpenApiEntries>[] = []
  const entriesPerRequest = 20
  for (
    let offset = items.length;
    offset < totalCount;
    offset += entriesPerRequest
  ) {
    requests.push(EntryRepository.getEntries(entriesPerRequest, offset))
  }
  const entries: Entry[] = (await Promise.all(requests))
    .map((v) => v.items)
    .flat()
  entries.push(...items)

  const serialNumbers = entries.map((v) => {
    return { params: { serialNumber: v.serialNumber.toString() } }
  })

  return {
    paths: serialNumbers,
    fallback: 'blocking',
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
  return (
    <TwoColumn>
      <>
        <Head>
          {Ogp({
            'og:title': `${entry.title} - ${Constants.title}`,
            'og:url': `${Constants.baseUrl}/entries/${entry.serialNumber}`,
            'og:description': entry.body,
            'og:type': 'article',
            'og:article:published_time': entry.time,
            'og:article:author': Constants.author,
          })}
        </Head>
        <Entries entry={entry} />
      </>
    </TwoColumn>
  )
}
