import style from './FormContact.module.css'

import emailjs from '@emailjs/browser'
import { useRef } from 'react'

import { BsFillTelephoneFill } from "react-icons/bs";

export default function FormContact(){

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm(
            import.meta.env.VITE_SERVICE_KEY,
            import.meta.env.VITE_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_PUBLIC_KEY
        )
        .then((result) => {

            form.current.reset();

            if (window.fbq) {

                window.fbq('track', 'Lead');
                            
            }

            alert("Mensagem enviada com sucesso!")

        }, (error) => {

            alert("Erro ao enviar mensagem: " + error.text)

        })
    }

    return(

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
                    
                    <form ref={form} onSubmit={sendEmail} className={style.form}>

                        <div className={style.formGroup}>

                            <label htmlFor="name">Nome</label>
                            <input type="text" id="name" name="name" placeholder="Seu nome" required />

                        </div>
                    
                        <div className={style.formGroup}>

                            <label htmlFor="email">E-mail</label>
                            <input type="email" id="email" name="email" placeholder="seuemail@exemplo.com" required />

                        </div>

                        <div className={style.formGroup}>

                            <label htmlFor="telephone">Telefone</label>
                            <input type="telephone" id="telephone" name="telephone" placeholder="(11) 9000-0000" required />

                        </div>

                        <div className={style.formGroup}>

                            <label htmlFor="subject">Assunto</label>
                            <input type="text" id="subject" name="subject" required />

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