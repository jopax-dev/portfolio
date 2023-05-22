import styles from './Modal.module.css'

export const Modal = () => {
  return (
    <div className={styles.modalBg}>
      <div className={styles.modal}>
        <p>
          Gracias por ponerte en contacto. Me pondre en contacto contigo tan pronto como sea posible.
        </p>
      </div>
    </div>
  )
}
