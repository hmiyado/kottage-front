import EntryRepository from 'api/entry/entryRepository'
import Button from 'components/pieces/button/button'
import Entry, { EntryProps } from 'components/plurals/entry/entry'
import EntryForm from 'components/plurals/entryform/entryform'
import PageNavigation from 'components/plurals/page/pagenavigation/pagenavigation'
import TwoColumn from 'components/plurals/template/twocolumn/twocolumn'
import styles from './root.module.css'
import Plus from 'components/pieces/button/plus.svg'
import { useContext, useState } from 'react'
import UserContext, { User } from 'context/user'

export default function Root({
  pageCount,
  entries,
}: {
  pageCount: number
  entries: EntryProps[]
}): JSX.Element {
  const { user } = useContext(UserContext)
  const [showEntryForm, updateShowEntryForm] = useState(false)

  const entryForm = (_user: User, _showEntryForm: boolean) => {
    if (_user === null) {
      return null
    }
    if (_showEntryForm) {
      return (
        <EntryForm
          onSubmit={(title, body) => {
            EntryRepository.createEntry(title, body)
            updateShowEntryForm(false)
          }}
          onCancel={() => updateShowEntryForm(false)}
        />
      )
    } else {
      return (
        <Button
          text="ENTRY"
          Icon={Plus}
          onClick={() => updateShowEntryForm(true)}
        />
      )
    }
  }

  return (
    <TwoColumn mainColumnClassName={styles.mainColumn}>
      <>
        {entryForm(user, showEntryForm)}
        {entries.map((entry, index) => {
          return <Entry key={index} props={entry} />
        })}
        <PageNavigation totalPages={pageCount} currentPage={1} />
      </>
    </TwoColumn>
  )
}
