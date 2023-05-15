import Link from 'next/link'
import styles from './Nav.module.css'

export const Nav = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.navitems}>
          <li>
            <Link href='/'>
              Home
            </Link>
          </li>
          <li>
            <Link href='/projects'>
              Projects
            </Link>
          </li>
          <li>
            <Link href='/about'>
              About
            </Link>
          </li>
          <li>
            <Link href='/contact'>
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
