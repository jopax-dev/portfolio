import nodemailer from 'nodemailer'

const email = process.env.EMAIL
const pass = process.env.EMAIL_PASS
const host = process.env.HOST

if (!email || !pass) {
  console.error('Falta configurar las credenciales de correo electrónico')
  process.exit(1)
}

export const transporter = nodemailer.createTransport({
  host,
  port: 465,
  secure: true,
  auth: {
    user: email,
    pass
  },
  tls: {
    rejectUnauthorized: false
  }
})

export const mailOptions = {
  to: email
}
