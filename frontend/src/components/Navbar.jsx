import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/logo.png'

function Navbar() {
  const [showQR, setShowQR] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const linksContainerRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    const container = linksContainerRef.current
    if (!container) return

    const links = container.querySelectorAll('a')
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%&?*+'
    const timers = new Map()

    // Progressive left-to-right reveal that keeps first character fixed
    const startReveal = (link) => {
      const originalText = link.dataset.originalText || link.textContent
      link.dataset.originalText = originalText
      clearInterval(timers.get(link))

      const randomizeCycles = 8
      const stepDelay = 20


      let revealed = Math.min(1, originalText.length) // keep first letter steady
      let steps = 0

      const id = setInterval(() => {
        let displayed = ''
        for (let i = 0; i < originalText.length; i++) {
          const ch = originalText[i]
          if (i < revealed) {
            displayed += ch
          } else if (ch === ' ') {
            displayed += ' '
          } else {
            displayed += chars[Math.floor(Math.random() * chars.length)]
          }
        }
        link.textContent = displayed

        steps += 1
        if (steps >= randomizeCycles) {
          steps = 0
          revealed += 1
        }
        if (revealed > originalText.length) {
          clearInterval(id)
          timers.delete(link)
        }
      }, stepDelay)

      timers.set(link, id)
    }

    const stopReveal = (link) => {
      const id = timers.get(link)
      if (id) clearInterval(id)
      timers.delete(link)
      const originalText = link.dataset.originalText || link.textContent
      link.textContent = originalText
    }

    const handleMouseOver = (e) => {
      const link = e.target.closest('a')
      if (!link || !container.contains(link)) return
      startReveal(link)
    }
    const handleMouseOut = (e) => {
      const link = e.target.closest('a')
      if (!link || !container.contains(link)) return
      stopReveal(link)
    }

    container.addEventListener('mouseover', handleMouseOver)
    container.addEventListener('mouseout', handleMouseOut)

    return () => {
      container.removeEventListener('mouseover', handleMouseOver)
      container.removeEventListener('mouseout', handleMouseOut)
      links.forEach((link) => {
        const id = timers.get(link)
        if (id) clearInterval(id)
      })
    }
  }, [])

  // Smooth scroll for navbar links (only for sections on home page)
  useEffect(() => {
    const container = linksContainerRef.current
    if (!container) return
    const handleClick = (e) => {
      const anchor = e.target.closest('a[data-section]')
      if (!anchor) return
      e.preventDefault()
      const sectionId = anchor.getAttribute('data-section')
      const el = document.getElementById(sectionId)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
    container.addEventListener('click', handleClick)
    return () => container.removeEventListener('click', handleClick)
  }, [])

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50" style={{ padding: '20px 0 0px 0' }}>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Subtle blue glow behind navbar */}
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full blur-3xl opacity-20 shadow-[0_0_240px_120px_#00E5FF]" />
          </div>

          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="relative flex items-center justify-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center">
                  <img
                    src={logo}
                    alt="ACES Logo"
                    className="w-full h-full object-contain rounded-full"
                  />
                </div>

                {/* Code braces */}
                <span className="absolute -left-6 text-[var(--color-cyan)] text-xl font-bold">{`{`}</span>
                <span className="absolute -right-6 text-[var(--color-cyan)] text-xl font-bold">{`}`}</span>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <div ref={linksContainerRef} className="bg-[rgba(15,16,29,0.65)] border border-[rgba(0,229,255,0.18)] rounded-full px-6 py-2 flex space-x-6">
                  <Link to="/" className="relative text-[rgba(255,255,255,0.85)] hover:text-white px-3 py-2 text-sm font-medium transition-all duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:bg-[var(--color-cyan)] after:transition-all after:duration-300 hover:after:w-full">Home</Link>
                  <Link to="/events" className="relative text-[rgba(255,255,255,0.85)] hover:text-white px-3 py-2 text-sm font-medium transition-all duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:bg-[var(--color-cyan)] after:transition-all after:duration-300 hover:after:w-full">Events</Link>
                  <Link to="/team" className="relative text-[rgba(255,255,255,0.85)] hover:text-white px-3 py-2 text-sm font-medium transition-all duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:bg-[var(--color-cyan)] after:transition-all after:duration-300 hover:after:w-full">Team</Link>
                  <Link to="/gallery" className="relative text-[rgba(255,255,255,0.85)] hover:text-white px-3 py-2 text-sm font-medium transition-all duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:bg-[var(--color-cyan)] after:transition-all after:duration-300 hover:after:w-full">Gallery</Link>
                  {/*<a href="#blog" data-section="blog" className="relative text-[rgba(255,255,255,0.85)] hover:text-white px-3 py-2 text-sm font-medium transition-all duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:bg-[var(--color-cyan)] after:transition-all after:duration-300 hover:after:w-full">Blog/News</a>*/}
                  <Link to="/join-us" className="relative text-[rgba(255,255,255,0.85)] hover:text-white px-3 py-2 text-sm font-medium transition-all duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:bg-[var(--color-cyan)] after:transition-all after:duration-300 hover:after:w-full">Join Us</Link>
                </div>
              </div>
            </div>

            {/* Contact Us + QR Button */}
            <div className="hidden md:flex items-center space-x-3">
              <Link to="/contact" className="relative overflow-hidden text-white font-semibold py-2 px-6 rounded-lg border border-[var(--color-cyan)] shadow-[0_0_28px_0_rgba(0,229,255,0.25)] hover:shadow-[0_0_42px_8px_rgba(0,229,255,0.35)] transition-all duration-300 bg-transparent hover:bg-[rgba(0,229,255,0.12)] anim-glow">
                Contact Us
              </Link>
              <button
                onClick={() => setShowQR(true)}
                className="flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors focus:outline-none"
              >
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
                  />
                </svg>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setMobileOpen(true)} className="text-white hover:text-[var(--color-cyan)] p-2">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 md:hidden"
          >
            <div onClick={() => setMobileOpen(false)} className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 260, damping: 24 }}
              className="absolute right-0 top-0 h-full w-72 bg-[rgba(15,16,29,0.92)] border-l border-[rgba(0,229,255,0.18)] shadow-[0_0_40px_rgba(0,229,255,0.25)] p-6 flex flex-col gap-4"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-white/80 font-semibold">Menu</span>
                <button onClick={() => setMobileOpen(false)} className="text-white/70 hover:text-white p-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="flex flex-col gap-2">
                <Link onClick={() => setMobileOpen(false)} to="/" className="text-white/90 py-2 px-3 rounded hover:bg-white/10">Home</Link>
                <Link onClick={() => setMobileOpen(false)} to="/events" className="text-white/90 py-2 px-3 rounded hover:bg-white/10">Events</Link>
                <Link onClick={() => setMobileOpen(false)} to="/team" className="text-white/90 py-2 px-3 rounded hover:bg-white/10">Team</Link>
                <Link onClick={() => setMobileOpen(false)} to="/gallery" className="text-white/90 py-2 px-3 rounded hover:bg-white/10">Gallery</Link>
                <Link onClick={() => setMobileOpen(false)} to="/contact" className="text-white/90 py-2 px-3 rounded hover:bg-white/10">Contact</Link>
                <Link onClick={() => setMobileOpen(false)} to="/join-us" className="text-white/90 py-2 px-3 rounded hover:bg-white/10">Join Us</Link>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showQR && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowQR(false)}
            className="fixed inset-0 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.5 }}
              onClick={e => e.stopPropagation()}
              className="bg-black/20 backdrop-blur-md rounded-xl p-8 max-w-md w-full text-center border border-white/5 shadow-lg ring-1 ring-white/10"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-white w-full text-center">Join Our WhatsApp Group</h3>
                <button
                  onClick={() => setShowQR(false)}
                  className="text-white/70 hover:text-white transition-colors absolute right-8"
                  aria-label="Close WhatsApp QR Code"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="bg-transparent">
                <img
                  src="/whatsapp-qr.png"
                  alt="WhatsApp QR Code"
                  className="w-full h-auto"
                  aria-hidden="true"
                />
              </div>
              <p className="mt-6 text-base text-white/70 text-center">
                Scan this QR code to join our WhatsApp group
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
