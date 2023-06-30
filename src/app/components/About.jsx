import styles from '../page.module.css'

export default function AboutPage () {
  return (
    <article className={styles.info}>
      <h2>Un poco sobre mí...</h2>
      <p>&#9657;
        Durante <b>3 años</b>, participé/gestioné mas de <b>50 proyectos</b>, tanto de freelance como dirigiendo equipos en consultora.
      </p>
      <p>&#9657;
        Mis primeros pasos como desarrollador, fueron creando scrappers y trabajando con <b>bbdd relacionales</b>, en la que las tablas más pequeñas rondaban los 40 millones de registros.
      </p>
      <p>&#9657;
        Si bien, gran parte de mi recorrido ha sido con stack <b>LAMP</b>, actualmente he rotado hacia el ecosistema de JS, principalmente con <b>REACT/Next y Express</b>.
      </p>
      <p>&#9657;
        Antes de dedicarme al desarrollo, estuve durante un tiempo ejerciendo como <b>L1</b> y <b>sysadmin</b> gestionando servidores.
      </p>
      <p>&#9657;
        Actualmente trabajando en empresa no tecnológica, pero desarrollando soluciones para cubrir carencias de nuestro software de gestión.
      </p>
    </article>
  )
}
