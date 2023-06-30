import './globals.css'
import styles from './maincontent.module.css'
import { Nav } from './components/Nav'
import { Footer } from './components/Footer'
import { Montserrat } from 'next/font/google'

export const font = Montserrat({
  subsets: ['latin']
})

export const metadata = {
  title: 'Jose Antonio \'Jopax\' Paz',
  description: 'Jose Antonio \'Jopax\' Paz - Desarrollador fullstack'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <body className={font.className}>
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
