import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../assets/logo.png'


function Footer() {
  const [showCredits, setShowCredits] = useState(false)

  return (
    <footer className="border-t border-[rgba(0,229,255,0.15)] bg-[rgba(15,16,29,0.65)]/60 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white/80 text-center md:text-left">
          {/* Logo */}
          <div className="flex items-center justify-center md:justify-start">
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


          <div>
            <h4 className="text-white font-semibold">Explore</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#events" className="hover:text-[var(--color-cyan)] transition-colors">Events</a></li>
              <li><a href="#team" className="hover:text-[var(--color-cyan)] transition-colors">Team</a></li>
              <li><a href="#gallery" className="hover:text-[var(--color-cyan)] transition-colors">Gallery</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold">Connect</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="mailto:contact@aces.org" className="hover:text-[var(--color-cyan)] transition-colors">Email</a></li>
              <li><a href="https://www.linkedin.com/company/association-of-computer-engineering-students/" className="hover:text-[var(--color-cyan)] transition-colors">LinkedIn</a></li>
              <li><a href="https://www.instagram.com/aces_itnu?igsh=NjJudnE5bmo1YWVr" className="hover:text-[var(--color-cyan)] transition-colors">Instagram</a></li>
            </ul>
          </div>
        </div>

        {/* Made with Love & Credits Section */}
        <div className="flex flex-col items-center justify-center text-center mt-12 pb-4 border-t border-white/5 pt-8">
          <p className="text-white/60 text-sm flex items-center gap-1.5">
            Made with <span className="text-red-500 animate-pulse">❤️</span> in India
          </p>
          <p className="text-white/60 text-sm mt-2">
            Developed by{' '}
            <button 
              onClick={() => setShowCredits(true)}
              className="text-[var(--color-cyan)] hover:underline hover:text-[var(--color-cyan)]/80 transition-colors font-medium focus:outline-none"
            >
              Team ACES
            </button>
          </p>
        </div>

        <div className="mt-6 flex flex-col md:flex-row items-center justify-between text-xs text-white/50">
          <p>© {new Date().getFullYear()} • ACES</p>
        </div>
      </div>

      {/* Credits Modal */}
      <AnimatePresence>
        {showCredits && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowCredits(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-[#0F101D] border border-[var(--color-cyan)]/30 p-8 rounded-2xl shadow-[0_0_50px_rgba(0,229,255,0.15)] max-w-sm w-full relative overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Decorative background elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-cyan)]/5 rounded-full blur-2xl -mr-10 -mt-10"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-[var(--color-cyan)]/5 rounded-full blur-2xl -ml-10 -mb-10"></div>

              {/* Close button */}
              <button 
                onClick={() => setShowCredits(false)}
                className="absolute top-4 right-4 text-white/30 hover:text-white transition-colors p-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <h3 className="text-xl font-bold text-white mb-8 text-center flex items-center justify-center gap-2">
                <span className="text-[var(--color-cyan)]">{`{`}</span> 
                <span>Credits</span> 
                <span className="text-[var(--color-cyan)]">{`}`}</span>
              </h3>
              
              <div className="space-y-8 relative z-10">
                <div className="text-center group">
                  <h4 className="text-[var(--color-cyan)] font-medium mb-3 text-xs uppercase tracking-[0.2em] opacity-80 group-hover:opacity-100 transition-opacity">Developer Team</h4>
                  <ul className="space-y-2 text-white/90">
                    <li className="font-medium text-lg hover:text-[var(--color-cyan)] transition-colors">Tanvi Madani</li>
                    <li className="font-medium text-lg hover:text-[var(--color-cyan)] transition-colors">Dhruvin Katakiya</li>
                  </ul>
                </div>
                
                <div className="text-center group">
                  <h4 className="text-[var(--color-cyan)] font-medium mb-3 text-xs uppercase tracking-[0.2em] opacity-80 group-hover:opacity-100 transition-opacity">UI/UX Team</h4>
                  <ul className="space-y-2 text-white/90">
                    <li className="font-medium text-lg hover:text-[var(--color-cyan)] transition-colors">Jinesh Dugar</li>
                    <li className="font-medium text-lg hover:text-[var(--color-cyan)] transition-colors">Manan Suri</li>
                    <li className="font-medium text-lg hover:text-[var(--color-cyan)] transition-colors">Tanisha Desai</li>
                    <li className="font-medium text-lg hover:text-[var(--color-cyan)] transition-colors">Priyanshi Jhala</li>
                  </ul>
                </div>
              </div>

              <div className="mt-10 text-center relative z-10">
                <div className="w-12 h-1 bg-[var(--color-cyan)]/20 mx-auto rounded-full mb-4"></div>
                <p className="text-[10px] text-white/30 uppercase tracking-widest">Designed & Developed with ❤️</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  )
}

export default Footer


