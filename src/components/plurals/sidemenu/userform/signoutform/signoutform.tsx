import { Constants } from '../../../../../util/constants'
import Button from '../../../../pieces/button/button'

const styles = {
  container: ['flex flex-col flex-wrap'].join(' '),
  account: ['flex flex-col flex-wrap', 'px-1.0'].join(' '),
  label: [
    'text-caption',
    'text-light-on-surface-disabled dark:text-dark-on-surface-disabled',
  ].join(' '),
  body: [
    'sign-out-body',
    'text-body1',
    'text-light-on-surface-high dark:text-dark-on-surface-high',
  ].join(' '),
}

export type SignOutFormProps = {
  screenName: string
  accountLinks: {
    service: string
    linking: boolean
  }[]
  onSignOutClicked: () => void
}

export default function SignOutForm({
  screenName,
  accountLinks,
  onSignOutClicked,
}: SignOutFormProps): React.JSX.Element {
  return (
    <div className={styles.container}>
      <dl className={styles.account}>
        <dt className={styles.label}>Name</dt>
        <dd className={styles.body}>{screenName}</dd>
        <dt className={styles.label}>Account</dt>
        <dd className={styles.body}>
          {accountLinks.map(({ service, linking }) => {
            const linkStatus = linking ? (
              '連携中'
            ) : (
              <a href={`${Constants.backendUrl}/oauth/google/authorize`}>
                連携する
              </a>
            )
            return (
              <div className={styles.body} key={service}>
                {service}: {linkStatus}
              </div>
            )
          })}
        </dd>
      </dl>
      <Button text="SIGN OUT" onClick={onSignOutClicked}></Button>
    </div>
  )
}
