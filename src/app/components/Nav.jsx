import Link from 'next/link'
import styles from './Nav.module.css'

export const Nav = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.navitems}>
          <li>
            <Link href='/'>
              HOME
            </Link>
          </li>
          <li>
            <Link href='/projects'>
              PROJECTS
            </Link>
          </li>
          <li>
            <Link href='/CV.pdf' target='_blank'>
              CV
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
