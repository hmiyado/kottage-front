import Avatar from '../../../pieces/avatar/avatar'

const styles = {
  container: ['flex flex-row flex-wrap'].join(' '),
  icon: ['w-3.0 h-3.0 mr-1.0'].join(' '),
  textContainer: ['flex flex-col flex-wrap'].join(' '),
  handlename: [
    'text-body1 text-light-on-surface text-opacity-on-surface-high dark:text-dark-on-surface dark:text-opacity-on-surface-high',
  ].join(' '),
  description: [
    'text-caption text-light-on-surface text-opacity-on-surface-medium dark:text-dark-on-surface dark:text-opacity-on-surface-medium',
  ].join(' '),
}

export default function Profile(): React.JSX.Element {
  return (
    <div className={styles.container}>
      <Avatar classes={{ icon: styles.icon }} />
      <div className={styles.textContainer}>
        <div className={styles.handlename}>miyado20th</div>
        <div className={styles.description}>アノマロカリス</div>
      </div>
    </div>
  )
}
