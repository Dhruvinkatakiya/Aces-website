import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Events from '../components/Events'
import FloatingCode from '../components/FloatingCode'

function EventsPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <FloatingCode />
      <Navbar />
      <main style={{ marginTop: '24px', flex: '1 0 auto' }}>
        <Events />
      </main>
      <Footer />
    </div>
  )
}

export default EventsPage
