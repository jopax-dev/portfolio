import Image from 'next/image'
import styles from '../page.module.css'

export default function AboutPage () {
  return (
    <>
      <Image
        className={styles.avatar}
        width='360'
        height='360'
        src={`https://api.dicebear.com/6.x/adventurer-neutral/svg?size=360&seed=${Math.random()}`}
        alt='avatar placeholder'

      />
      <article className={styles.info}>
        <h2>Sobre Mi</h2>
        <p>
          Mi nombre Jose Antonio Paz y soy desarrollador web fullstack.
        </p>
        <p>
          Empecé en este mundo allá por el 2009. Mi primer contacto fue gracias a Acerelrados Nerworks (espalzone y derivados), donde tuve mi bautismo con PHP y BBDD con tablas de mas de 40 millones de registros...buen inicio para alguien recien salido del cascaron..
        </p>
        <p>
          Tras esto, hice varios trabajos como freelance mientras terminaba mis estudios como técnico superior.
        </p>
        <p>
          Acabé en una empresa donde pasé un tiempo desarrollando MVPs, landing pages y haciendo programación a medida, pasando por tiendas online y demas contenido con distintos CMS.
        </p>
        <p>
          Por los vaivenes de la vida, tuve que dejar mi profesión, aquello que me apasionaba.
        </p>
        <p>
          Ahora, con el paso de los años, he podido volver con mas ganas que nunca a la que siempre ha sido mi gran pasión desde muy pequeño, desarrollar. Buscar solucion a diferentes problemas gracias al código.
        </p>
        <p>
          Esa sensación entre alegría y miedo al ver que tu código espagueti va cobrando vida, va creciendo y convirtiendose en ese monstruo que algun día te dira "Hola, la de refactorizar te la sabes?" y te cagaras en todo por no haber hecho bien las cosas desde un principio, pero todo sea por ir tirando del hilo hasta que encuentras la solucion a ese problema que tenias al implementar folios y folios de formulas para diseñar intercambiadores de calor que un ingeniero te pidió porque no tenia ganas de viajar por trabajo y prefería usar su patente y tener un sistema que diera las especificaciones del producto a sus clientes mientras el podia estar en casa...
        </p>
        <p>
          O esa otra vez en la que se te dibujó una sonrisa de oreja a oreja mientras te tomabas un café porque por fin el código de error habia cambiado...
        </p>
        <p>
          Como ya he comentado, empecé mis andanzas en una pequeña empresa pero con proyectos bastante grandes para mis conocimientos y vagaje por aquel entonces.
        </p>
        <p>
          Tras varios proyectos y un FP superior, aterricé en una empresa donde participé en mas de 35 proyectos. Iban desde landing pages y diverso contenido con CMS como tiendas, hasta programación a medida, haciendo backoffices, ERP, e incluso algun proyecto con anecdotas bastante divertidas en cuanto a los requisitos.
        </p>
        <p>
          Por último, terminé dirigiendo pequeños equipos en paralelo mientras seguía picando código. En esta época, empezamos a desarrollar un producto propio para agilizar todo el flujo de trabajo y centralizarlo todo, ya que trabajabamos con equipos internaciónales, pero como dije antes, tuve que dejar el sector.
        </p>
        <p>
          A día de hoy, gracias a que el tiempo y el trabajo me lo han permitido, he vuelto a desarrollar. Este último año me he dedicado a desarrollar pequeños servicios que usamos en mi actual empresa (no IT), y que tengo intención de integrar en un proyecto más grande donde poder tenerlo todo bien integrado para poder cubrir las carencias que tiene nuestro actual software.
        </p>
      </article>
    </>
  )
}
