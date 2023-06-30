import styles from './page.module.css'
import RoundLinkMenu from './components/RoundLinkMenu'
import AboutPage from './components/About'

export default function Home () {
  return (
    <>
      <div className={styles.wrapper}>
        <RoundLinkMenu />
        <article className={styles.info}>
          <h1>
            Jose Antonio 'Jopax' Paz
          </h1>
          <h2><i>Fullstack developer</i></h2>
          <p>
            Desarrollador con algunos años de experiencia a mis espaldas.
          </p>
          <p>
            Casi toda mi carrera se ha centrado principalmente en hacer <b>MVP's</b>, programación a medida y gestión de equipos.
          </p>
        </article>
      </div>
      <AboutPage />
    </>
  )
}
