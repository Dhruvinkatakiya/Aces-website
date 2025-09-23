import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ContactPage from './pages/ContactPage'
import EventsPage from './pages/EventsPage'
import TeamPage from './pages/TeamPage'
import GalleryPage from './pages/GalleryPage'
import JoinUs from './pages/JoinUs'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import React from 'react'

function App() {
  return (
    <Router>
      <div className="app-root" style={{ position: 'relative', minHeight: '100vh' }}>
        <Navbar />
        <ScrollToTop />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/join-us" element={<JoinUs />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App