import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import Latest from '../../components/Latest/Latest'
import Contact from '../../components/Contact/Contact'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Latest />
        <Contact />
        <Footer />
    </div>
  )
}

export default Home
