import Image from 'next/image'
import styles from './page.module.css'

export default function Home () {
  return (
    <>
      <div className={styles.avatar}>
        <Image
          width='360'
          height='360'
          // src={`https://api.dicebear.com/6.x/adventurer-neutral/svg?size=360&seed=${Math.random()}`}
          src='/landing2.webp'
          alt='avatar placeholder'

        />
      </div>
      <article className={styles.info}>
        <h2>
          Jose Antonio Paz, <i>desarrollador web fullstack</i>.
        </h2>
        <p>
          Apasionado del desarrollo, con algunos años de experiencia a mis espaldas y varias decenas de proyectos en los que he participado.
        </p>
        <p>
          Soy de esas personas que, si puede, prefiere entender cómo funciona algo en lugar de simplemente seguir girando la rueda. De esta manera, si en el futuro hay cambios, puedo aplicar lo que ya he aprendido o desarrollar una solución propia.
        </p>
        <p>
          Me gusta analizar los problemas y buscar diferentes soluciones. Esto no significa que me dedique a dar vueltas sobre lo mismo sin avanzar. Mi experiencia desarrollando MVP's me ha enseñado que es mejor tener un producto funcionando y generando resultados. Habrá tiempo en el futuro para buscar nuevas implementaciones cuando sea necesario reorganizar y asentar las cosas.
        </p>
      </article>
    </>
  )
}
