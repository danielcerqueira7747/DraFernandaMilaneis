import style from './About.module.css'
import ImageDra from '../../assets/image-dra.jpg'

import { FaWhatsapp } from 'react-icons/fa'

export default function About() {
  return (
    <section className={`${style.aboutSection} py-5`}>
      <div className="container">
        <h2 className="text-left mb-5">Dra. Fernanda Milaneis</h2>

        <div className="row align-items-start">

          <div className="col-md-5 text-left mb-4 mb-md-0">
            <img
              src={ImageDra}
              alt="Imagem da Dra. Fernanda Milaneis"
              className="img-fluid rounded"
            />
            <div className="mt-3">
              <h4 className="mb-1">Médica</h4>
              <p className="mb-0">Endócrino e Geriatria · Medicina da Família</p>
            </div>
          </div>

          <div className="col-md-7">
            <div className={style.contentAbout}>
              <p>Prazer, eu sou a Dra. Fernanda Milaneis!</p>
              <p>
                Formada há 10 anos pela PUC-PR, com residência em Medicina da Família
                pela Baixada Santista e especialização em Endócrino e Geriatria pelo Hospital Albert Einstein - SP.
              </p>
              <p>Minha missão é oferecer cuidado humanizado para pessoas 40+.</p>
              <p>
                Meu trabalho vai além do tratamento: foco na promoção da saúde, prevenção de doenças e cuidado integral, considerando os aspectos físicos, emocionais e sociais de cada paciente.
              </p>
              <p>
                Se você busca mais qualidade de vida e bem-estar, estou aqui para ajudar!
              </p>
              <a
                href="https://api.whatsapp.com/send?phone=5513996423934&amp;text=Olá! Eu gostaria de agendar um atendimento com Dra. Fernanda Milaneis "
                target="_blank"
                rel="noreferrer"
                className={style.ctaButton}
                id='btn-whatsapp-about'
              >
                <FaWhatsapp className={style.icon} /> Fale comigo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
