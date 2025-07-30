import style from './FormContact.module.css'
import { useRef } from 'react'
import { BsFillTelephoneFill } from "react-icons/bs";

export default function FormContact() {

    const form = useRef();

    const sendToWhatsapp = (e) => {
        e.preventDefault();

        const name = form.current.name.value;
        const message = form.current.message.value;

        const fullMessage = `Olá, me chamo \n\n` +
            `*Nome:* ${name}\n` +
            `*Mensagem:* ${message}`;

        const encodedMessage = encodeURIComponent(fullMessage);
        const phone = "5513996423934";

        const whatsappURL = `https://wa.me/${phone}?text=${encodedMessage}`;

        window.open(whatsappURL, '_blank');

        form.current.reset();
    }

    return (

        <section className={style.contact} id='contact'>

            <h2 className={style.title}>Contato</h2>

            <div className={style.container}>

                <div className={style.addressContact}>

                    <div className={style.contentContact}>
                        <h4>Dra. Fernanda Milaneis</h4>
                        <span>Unidade Santos (STS)</span>
                        <p>Avenida Ana Costa, 228 20º Andar</p>
                        <p>Gonzaga</p>
                        <p>Santos/SP</p>
                        <p>11060-002</p>
                        <p><BsFillTelephoneFill /> (13) 2191-4791</p>
                    </div>

                </div>

                <div className={style.form}>
                    
                    <form id='formContact' ref={form} onSubmit={sendToWhatsapp} className={style.form}>

                        <div className={style.formGroup}>
                            <label htmlFor="name">Nome</label>
                            <input type="text" id="name" name="name" placeholder="Seu nome" required />
                        </div>
                    
                        <div className={style.formGroup}>
                            <label htmlFor="message">Mensagem</label>
                            <textarea id="message" name="message" rows="5" placeholder="Digite sua mensagem aqui..." required></textarea>
                        </div>
                    
                        <button type="submit" className={style.button}>Enviar Mensagem</button>

                    </form>

                </div>

            </div>

        </section>

    )
}
