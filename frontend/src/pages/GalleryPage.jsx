import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Gallery from '../components/Gallery'
import FloatingCode from '../components/FloatingCode'

function GalleryPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <FloatingCode />
      <Navbar />
      <main style={{ marginTop: '24px', flex: '1 0 auto' }}>
        <Gallery />
      </main>
      <Footer />
    </div>
  )
}

export default GalleryPage


