import style from './Footer.module.css'
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa'

import Logo from '../../assets/logo.png'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <img src={Logo} width="auto" height="140" />

        <div className={style.socialIcons}>
          <a href="https://www.facebook.com/people/Dra-Fernanda-Milaneis/61571855738106/" target="_blank" rel="noreferrer" className={style.icon}>
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/dra.fernandamilaneis/" target="_blank" rel="noreferrer" className={style.icon}>
            <FaInstagram />
          </a>
          <a href="https://api.whatsapp.com/send?phone=5513996423934&amp;text=Olá! Eu gostaria de agendar um atendimento com Dra. Fernanda Milaneis " target="_blank" rel="noreferrer" className={style.icon}>
            <FaWhatsapp />
          </a>
        </div>

        <p className={style.copy}>
          Site desenvolvido por&nbsp;
          <a
            href="https://agenciabrazu.com.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Brazu Agência de Marketing
          </a>
          &nbsp;© {year}
        </p>

      </div>
    </footer>
  )
}
