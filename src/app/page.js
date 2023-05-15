import Image from 'next/image'
import styles from './page.module.css'

export default function Home () {
  return (
    <>
      <Image
        width='360'
        height='360'
        src={`https://api.dicebear.com/6.x/adventurer-neutral/svg?size=360&seed=${Math.random()}`}
        alt='avatar placeholder'
        className={styles.avatar}
      />
      <article className={styles.info}>
        <h2>
          Jose Antonio Paz, <i>desarrollador web fullstack</i>.
        </h2>
        <p>
          Apasionado del desarrollo, con algunos años de experiencia a mis espaldas y varias decenas de proyectos en los que he participado.
        </p>
        <p>
          Soy de esas personas que si puede, prefiere entender el como funciona algo a simplemente seguir girando la rueda. Así, si en el futuro cambia, poder aplicar lo ya aprendido o desarrollar una solución propia.
        </p>
        <p>
          Me gusta analizar los problemas y buscar diferentes soluciones. Eso no quiere decir que me dedique a darle vueltas a lo mismo sin avanzar. Mi experiencia desarrollando MVP's me ha enseñado que es mejor tener un producto funcionando y generando. Ya habrá tiempo mas adelante de buscar nuevas implementaciones cuando toque reorganizar y asentar las cosas.
        </p>
      </article>
    </>
  )
}
