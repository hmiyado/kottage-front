import Head from 'next/head'
import styles from './header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>miyado.dev</h1>
    </header>
  )
}
