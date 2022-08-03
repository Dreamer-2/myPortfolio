import React from 'react';
import Header from './components/header/Header'
import Portfolio from './components/portfolio/Portfolio'
import Nav from './components/nav/Nav'
import Services from './components/services/Services'
import Experience from './components/experience/Experience'
import Contact from './components/contact/Contact'
import About from './components/about/About'
import Testimonials from './components/testimonials/Testimonials'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
    <Header/>
    <Nav/>
    <About/>
    <Experience/>
    <Services/>
    <Portfolio/>
    <Testimonials/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App;