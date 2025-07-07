import style from './Location.module.css'

export default function Location() {
    return (
        <section className={style.sectionLocation} id='location' data-aos="fade-down">
            <div className={style.content}>
                <h2 className={style.title}>Como chegar</h2>
                <p className={style.description}>
                    Nosso consultório está localizado em um ambiente calmo, seguro e de fácil acesso. Esperamos por você!
                </p>
                <div className={style.mapWrapper} data-aos="fade-up" data-aos-delay="200">
                    <iframe
                        title="Localização no Google Maps"
                        src="https://www.google.com/maps?q=-23.9537633,-46.3314283&hl=pt-BR&z=15&output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </section>
    )
}
