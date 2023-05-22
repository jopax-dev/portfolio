'use client'
import { useState } from 'react'
import styles from './Form.module.css'
import { Debugger } from '../../../helper/debugger'
import { sendContactForm } from '../../../lib/emailApi'
import { Modal } from './Modal'

const env = process.env.NODE_ENV
const initValues = { name: '', email: '', message: '' }

export default function ContactForm () {
  const [state, setState] = useState(initValues)
  const [modal, showModal] = useState(false)

  const values = state
  const handleChange = (ev) => setState((prev) => ({
    ...prev,
    [ev.target.name]: ev.target.value
  }
  ))

  const handleSubmit = (ev) => {
    ev.preventDefault()
    setTimeout(() => {
      showModal(true)
    }, 500)
    sendContactForm(state)
    setState(initValues)
    setTimeout(() => {
      showModal(false)
    }, 4000)
  }

  return (
    <>
      {modal && <Modal />}
      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor='name'>Nombre</label>
        <input type='text' required placeholder='Nombre' name='name' id='name' value={values.name} onChange={handleChange} />
        <label htmlFor='email'>Email</label>
        <input type='email' required placeholder='email@email.com' name='email' id='email' value={values.email} onChange={handleChange} />
        <label htmlFor='message'>Deja aqui tu comentario</label>
        <textarea name='message' required id='message' cols='30' rows='10' placeholder='Comentario...' value={values.message} onChange={handleChange} />
        <input type='submit' value='Enviar' />
      </form>

      {env === 'development' && <Debugger states={state} />}
    </>
  )
}
