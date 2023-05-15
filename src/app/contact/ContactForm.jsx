'use client'
import styles from './Form.module.css'

export default function ContactForm () {
  const handleSubmit = (ev) => {
    ev.preventDefault()
    console.log('hola')
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor='name'>Nombre</label>
      <input type='text' placeholder='Nombre' name='name' id='name' />
      <label htmlFor='email'>Email</label>
      <input type='email' placeholder='email@email.com' name='email' id='email' />
      <label htmlFor='comment'>Deja aqui tu comentario</label>
      <textarea name='comment' id='comment' cols='30' rows='10' placeholder='Comentario...' />
      <input type='submit' value='Enviar' />
    </form>
  )
}
