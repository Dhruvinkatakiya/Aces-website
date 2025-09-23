import React from 'react'
import logo from '../assets/logo.png'


function Footer() {
  return (
    <footer className="border-t border-[rgba(0,229,255,0.15)] bg-[rgba(15,16,29,0.65)]/60 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-white/80">
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


          <div>
            <h4 className="text-white font-semibold">Explore</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#events" className="hover:text-[var(--color-cyan)] transition-colors">Events</a></li>
              <li><a href="#team" className="hover:text-[var(--color-cyan)] transition-colors">Team</a></li>
              <li><a href="#gallery" className="hover:text-[var(--color-cyan)] transition-colors">Gallery</a></li>
              <li><a href="#blog" className="hover:text-[var(--color-cyan)] transition-colors">Blog/News</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold">Connect</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#join" className="hover:text-[var(--color-cyan)] transition-colors">Join Us</a></li>
              <li><a href="mailto:contact@aces.org" className="hover:text-[var(--color-cyan)] transition-colors">Email</a></li>
              <li><a href="#" className="hover:text-[var(--color-cyan)] transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-[var(--color-cyan)] transition-colors">Instagram</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col md:flex-row items-center justify-between text-xs text-white/50">
          <p>© {new Date().getFullYear()} ACES. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex items-center gap-4">
            <a href="#" className="hover:text-[var(--color-cyan)] transition-colors">Privacy</a>
            <span className="opacity-30">•</span>
            <a href="#" className="hover:text-[var(--color-cyan)] transition-colors">Terms</a>
          </div>
        </div>
      </div>

    </footer>
  )
}

export default Footer


