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
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.391180198229!2d-46.32509068447386!3d-23.953023284504843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce03a021b0eec7%3A0xe29508886c9225f7!2sAv.%20Conselheiro%20N%C3%A9bias%2C%20444%20-%20Encruzilhada%2C%20Santos%20-%20SP%2C%2011045-000%2C%20Brasil!5e0!3m2!1spt-BR!2sbr!4v1722336428571!5m2!1spt-BR!2sbr"
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
