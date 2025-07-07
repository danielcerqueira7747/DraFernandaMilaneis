import React, { Component } from 'react';
import style from './Home.module.css'

import HeroSection from '../../layout/HeroSection/HeroSection'
import Location from '../../layout/Location/Location'
import FormContact from '../../layout/FormContact/FormContact'
import About from '../../layout/About/About'
import ButtonWhatsapp from '../../components/ButtonWhatsapp/ButtonWhatsapp'

// Adicionar analytics e gtag ( BotãoWhatsappNavbar, BotãoWhatsappHeroSection, BotãoWhatsappFaleComigo )

export default class Home extends Component {

    render(){

        return (

            <>
                <ButtonWhatsapp />
                <HeroSection />
                <About />
                <Location />
                <FormContact />

            </>

        )

    }

}