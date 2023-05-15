import './globals.css'
import styles from './page.module.css'
import { Nav } from './components/Nav'
import { Footer } from './components/Footer'

export const metadata = {
  title: 'Jose Antonio \'Jopax\' Paz',
  description: 'Jose Antonio \'Jopax\' Paz - Desarrollador fullstack'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <body>
        <Nav />
        <main className={styles.main}>
          <section className={styles.content}>
            {children}
          </section>
        </main>
        <Footer />
      </body>
    </html>
  )
}
