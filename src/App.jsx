import './App.css'

import Navbar from './layout/Navbar/Navbar'
import Footer from './layout/Footer/Footer'

import Home from './pages/Home/Home'

import AOS from 'aos'
import 'aos/dist/aos.css'

import { useEffect } from 'react'

function App() {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])

  return (
    <>

      <Navbar />

      <Home />

      <Footer />

    </>
  )
}

export default App
