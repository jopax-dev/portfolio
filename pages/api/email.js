import { mailOptions, transporter } from '../../lib/nodemailer'

export default async function handler (req, res) {
  if (req.method === 'POST') {
    const data = req.body
    if (!data.name || !data.email || !data.message) {
      return res.status(400).json({ message: 'Bad request' })
    }

    const formatedMessage = data.message.split('\n').map((p) => `<p>${p}</p>`)

    try {
      await transporter.sendMail({
        ...mailOptions,
        from: data.email,
        subject: `Contacto desde web -- ${data.email}`,
        text: `Email de contacto  \n ${data.email} \n ${data.message}`,
        html: `
          <h6>Contacto de ${data.name} -- ${data.email}</h6>
          - Nombre: ${data.name}
          ${formatedMessage.join('')}
          `
      })

      return res.status(200).json({ success: true })
    } catch (error) {
      console.log(error)
      return res.status(400).json({ message: error.message })
    }
  }

  return res.status(400).json({ message: 'Bad request' })
}
