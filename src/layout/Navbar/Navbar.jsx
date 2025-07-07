import style from './Navbar.module.css'
import { FaUserMd, FaWhatsapp } from 'react-icons/fa'

import Logo from '../../assets/logo.png'

export default function Navbar() {
  return (
    <nav className={`navbar navbar-expand-lg shadow-sm fixed-top ${style.navbar_container}`}>
      <div className="container-fluid">
        <a className={`navbar-brand d-flex align-items-center gap-2 fw-bold ${style.brand}`} href="#">
          <FaUserMd size={20} />
          Dra. Fernanda Milaneis
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className={`navbar-nav ${style.navList}`}>
            <li className="nav-item">
              <a className={`nav-link ${style.navLink}`} href="#heroSection">Início</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${style.navLink}`} href="#location">Localização</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${style.navLink}`} href="#contact">Contato</a>
            </li>
            <li className="nav-item">
              <button className={style.btnWpp}>
                <a href="https://api.whatsapp.com/send?phone=5511933058210&amp;text=Olá! Eu gostaria de agendar um atendimento com Dra. Fernanda Milaneis " 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   aria-label="WhatsApp"
                   id='btn-whatsapp-navbar'>
                    Agendar Consulta <FaWhatsapp />
                </a>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
