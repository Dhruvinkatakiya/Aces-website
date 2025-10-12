import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import About from '../components/About'
import FloatingCode from '../components/FloatingCode'


function Home() {
  return (
    <div id="home" style={{ display: 'flex', flexDirection: 'column' }}>
      <FloatingCode />
      <Navbar />
      <main style={{ marginTop: '24px', flex: '1 0 auto' }}>
        <Hero />
        <About />
      </main>
      <Footer />
    </div>
  )
}

export default Home
