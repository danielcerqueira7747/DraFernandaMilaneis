import style from './HeroSection.module.css'
import imageDra from '../../assets/image-dra.png'
import { FaWhatsapp } from 'react-icons/fa'

export default function HeroSection() {
  return (
    <section className={style.hero} id='heroSection'>
      <div className={`${style.overlay}`}>
        <div className={`container ${style.content}`}>
          <div className="row align-items-center">
            <div className={`col-md-6 ${style.textSide}`} data-aos="fade-right">
              <h1 className={style.title}>
                Minha missão é oferecer cuidado humanizado para pessoas 40+
              </h1>
              <p className={style.subtitle}>
                Meu trabalho vai além do tratamento: foco na promoção da saúde , prevenção de doenças e cuidado integral, considerando os aspectos físicos , emocionais e sociais de cada paciente.
              </p>
              <a
                href="https://api.whatsapp.com/send?phone=5511933058210&amp;text=Olá! Eu gostaria de agendar um atendimento com Dra. Fernanda Milaneis "
                target="_blank"
                rel="noreferrer"
                className={style.ctaButton}
                id='btn-whatsapp-herosection'
              >
                <FaWhatsapp className={style.icon} /> Fale com a Dra. no WhatsApp
              </a>
            </div>
            <div className="col-md-6 text-center" data-aos="fade-left">
              <div className={style.imageWrapper}>
                <img
                  src={imageDra}
                  alt="Dra. Fernanda Milaneis - Geriatra"
                  className={`img-fluid ${style.heroImage}`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
