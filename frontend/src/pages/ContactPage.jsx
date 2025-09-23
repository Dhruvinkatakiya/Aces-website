import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Contact from '../components/Contact'
import FloatingCode from '../components/FloatingCode'

function ContactPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <FloatingCode />
      <Navbar />
      <main style={{ marginTop: '24px', flex: '1 0 auto' }}>
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default ContactPage
