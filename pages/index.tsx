import Layout from '../components/layout/layout'
import SignInForm from '../components/sidemenu/signinform/signinform'
import styles from './rootpage.module.css'
import Profile from '../components/sidemenu/profile/profile'
import UserContext, { User } from '../context/user'
import UserRepository, { Sign } from '../api/user/userRepository'
import SignOutForm from '../components/sidemenu/signoutform/signoutform'

export default function RootPage() {
  return (
    <UserContext.Consumer>
      {({ user, updateUser }) => (
        <Layout>
          <div className={styles.container}>
            <div className={styles.mainColumn}>temporally content</div>
            <div className={styles.sideColumn}>
              <Profile />

              {user ? (
                <SignOutForm
                  screenName={user.screenName}
                  onSignOutClicked={() => {}}
                />
              ) : (
                <SignInForm
                  onSignInClicked={signAndUpdateUser(
                    UserRepository.signIn,
                    updateUser
                  )}
                  onSignUpClicked={signAndUpdateUser(
                    UserRepository.signUp,
                    updateUser
                  )}
                />
              )}
            </div>
          </div>
        </Layout>
      )}
    </UserContext.Consumer>
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
