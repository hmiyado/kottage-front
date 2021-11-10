import Layout from '../components/layout/layout'
import styles from './rootpage.module.css'
import Profile from '../components/sidemenu/profile/profile'
import UserContext, { User } from '../context/user'
import UserForm from '../components/sidemenu/userform/userform'
import UserRepository, { Sign } from '../api/user/userRepository'
import { useContext, useEffect, useState } from 'react'
import Button from '../components/atoms/button/button'
import Plus from '../components/atoms/button/plus.svg'
import EntryForm from '../components/entryform/entryform'
import EntryRepository from '../api/entry/entryRepository'
import { Entries } from '../api/openapi/generated'
import Entry from '../components/entry/entry'
import { dateFormatter } from '../util/dateFormatter'
import ServiceReference from '../components/sidemenu/servicereference/servicereference'

export async function getStaticProps() {
  try {
    const entries = await EntryRepository.getEntries()
    return {
      props: {
        entries: {
          items: entries.items
            ?.map((v) => {
              const { dateTime, ...rest } = v
              return {
                dateTime: dateFormatter['YYYY-MM-DDThh:mm:ss'](
                  new Date(dateTime)
                ),
                ...rest,
              }
            })
            .sort((a, b) => b.serialNumber - a.serialNumber),
        },
      },
    }
  } catch (e) {
    return {
      props: {
        entries: {
          items: [],
        },
      },
    }
  }
}

export default function RootPage({ entries }: { entries: Entries }) {
  const { user, updateUser } = useContext(UserContext)
  const [showEntryForm, updateShowEntryForm] = useState(false)
  const [showUserForm, updateShowUserForm] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    UserRepository.current()
      .then((currentUser) => updateUser(currentUser))
      .catch(() => updateUser(null))
  }, [])

  useEffect(() => {
    const initialThemeMediaQuery = window.matchMedia(
      '(prefers-color-scheme: dark)'
    )
    const setThemeByMediaQuery = (isDark: boolean) => {
      setTheme(isDark ? 'dark' : 'light')
    }
    initialThemeMediaQuery.addEventListener('change', (e) => {
      console.log(e)

      setThemeByMediaQuery(e.matches)
    })
    setThemeByMediaQuery(initialThemeMediaQuery.matches)
  }, [setTheme])

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
          text="Entry"
          Icon={Plus}
          onClick={() => updateShowEntryForm(true)}
        />
      )
    }
  }

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.mainColumn}>
          {entryForm(user, showEntryForm)}
          {entries.items?.map((entry, index) => {
            return (
              <Entry
                key={index}
                title={entry.title}
                time={String(entry.dateTime)}
                author={entry.author.screenName}
              >
                {entry.body}
              </Entry>
            )
          })}
        </div>
        <div className={styles.sideColumn}>
          <div onClick={() => updateShowUserForm((pre) => !pre)}>
            <Profile />
          </div>

          {showUserForm ? (
            <UserForm
              screenName={user?.screenName}
              onSignUpClicked={signAndUpdateUser(
                UserRepository.signUp,
                updateUser
              )}
              onSignInClicked={signAndUpdateUser(
                UserRepository.signIn,
                updateUser
              )}
              onSignOutClicked={signOut(updateUser)}
            />
          ) : null}

          <ServiceReference theme={theme} />
        </div>
      </div>
    </Layout>
  )
}

const signAndUpdateUser = (
  sign: Sign,
  updateUser: (newUser: User) => void
): ((id: string, password: string) => Promise<void>) => {
  return async (id, password) => {
    try {
      const user = await sign(id, password)
      updateUser(user)
    } catch {
      updateUser(null)
    }
  }
}

const signOut = (
  updateUser: (newUser: User) => void
): (() => Promise<void>) => {
  return async () => {
    await UserRepository.signOut()
    updateUser(null)
  }
}
