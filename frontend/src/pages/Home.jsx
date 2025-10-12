import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import About from '../components/About'
<<<<<<< HEAD
=======
import Loading from '../components/Loading'
import useLoadingDetection from '../hooks/useLoadingDetection'
>>>>>>> 6ce4b2a (first commit)
import FloatingCode from '../components/FloatingCode'


function Home() {
<<<<<<< HEAD
  return (
    <div id="home" style={{ display: 'flex', flexDirection: 'column' }}>
      <FloatingCode />
      <Navbar />
      <main style={{ marginTop: '24px', flex: '1 0 auto' }}>
        <Hero />
        <About />
      </main>
      <Footer />
=======
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
>>>>>>> 6ce4b2a (first commit)
    </div>
  )
}

export default Home
