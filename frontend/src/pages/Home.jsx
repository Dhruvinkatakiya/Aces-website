import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import About from '../components/About'
import Loading from '../components/Loading'
import useLoadingDetection from '../hooks/useLoadingDetection'
import FloatingCode from '../components/FloatingCode'


function Home() {
  const { isLoading, loadingReason } = useLoadingDetection()

  const handleLoadingComplete = () => {
    // Loading will be controlled by the hook
  }

  return (
    <div id="home" style={{ display: 'flex', flexDirection: 'column' }}>
      {isLoading ? (
        <Loading onComplete={handleLoadingComplete} loadingReason={loadingReason} />
      ) : (
          <>
          <FloatingCode />
          <Navbar />
          <main style={{ marginTop: '24px', flex: '1 0 auto' }}>
            <Hero />
            <About />
          </main>
          <Footer />
        </>
      )}
    </div>
  )
}

export default Home
