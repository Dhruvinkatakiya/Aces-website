import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React, { useEffect, Suspense, lazy } from 'react'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Loading from './components/Loading'
import Favicon from './components/Favicon'
// Temporarily disable custom optimization hooks to resolve invalid hook call
// import { 
//   usePerformanceOptimization, 
//   useCriticalCSS, 
//   useResourceHints,
//   useCodeSplitting 
// } from './hooks/useOptimization'

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const EventsPage = lazy(() => import('./pages/EventsPage'))
const TeamPage = lazy(() => import('./pages/TeamPage'))
const GalleryPage = lazy(() => import('./pages/GalleryPage'))
const GalleryEventPage = lazy(() => import('./pages/GalleryEventPage'))
const JoinUs = lazy(() => import('./pages/JoinUs'))
const EventDetails = lazy(() => import('./components/EventDetails'))

function App() {
  // Temporarily disable optimization hooks
  // usePerformanceOptimization()
  // useCriticalCSS()
  // useResourceHints()
  const preloadRoute = () => {}

  // Register service worker
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then((registration) => {
            console.log('SW registered: ', registration)
          })
          .catch((registrationError) => {
            console.log('SW registration failed: ', registrationError)
          })
      })
    }
  }, [])

  // Preload routes on hover
  const handleRouteHover = (routePath, importFn) => {
    preloadRoute(routePath, importFn)
  }

  return (
    <Router>
      <div className="app-root" style={{ position: 'relative', minHeight: '100vh' }}>
        <Favicon />
        <Navbar />
        <ScrollToTop />
        <main className="main-content">
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route 
                path="/" 
                element={
                  <div onMouseEnter={() => handleRouteHover('/contact', () => import('./pages/ContactPage'))}>
                    <Home />
                  </div>
                } 
              />
              <Route 
                path="/contact" 
                element={
                  <div onMouseEnter={() => handleRouteHover('/events', () => import('./pages/EventsPage'))}>
                    <ContactPage />
                  </div>
                } 
              />
              <Route 
                path="/events" 
                element={
                  <div onMouseEnter={() => handleRouteHover('/team', () => import('./pages/TeamPage'))}>
                    <EventsPage />
                  </div>
                } 
              />
              <Route 
                path="/team" 
                element={
                  <div onMouseEnter={() => handleRouteHover('/gallery', () => import('./pages/GalleryPage'))}>
                    <TeamPage />
                  </div>
                } 
              />
              <Route 
                path="/gallery" 
                element={
                  <div onMouseEnter={() => handleRouteHover('/join-us', () => import('./pages/JoinUs'))}>
                    <GalleryPage />
                  </div>
                } 
              />
              <Route path="/gallery/:slug" element={<GalleryEventPage />} />
              <Route path="/join-us" element={<JoinUs />} />
              <Route path="/events/:id" element={<EventDetails />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </Router>
  )
}

export default App