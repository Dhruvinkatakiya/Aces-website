import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0F101D] text-white px-4 text-center pt-24">
      <div className="relative mb-8">
        <h1 className="text-9xl font-bold text-[var(--color-cyan)] opacity-20">404</h1>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-3xl md:text-4xl font-bold text-white">Page Not Found</span>
        </div>
      </div>
      
      <p className="text-white/60 mb-8 max-w-md">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>

      <Link 
        to="/"
        className="px-8 py-3 bg-[var(--color-cyan)] text-[#0F101D] font-bold rounded-full hover:bg-cyan-400 transition-colors duration-300"
      >
        Go Back Home
      </Link>
    </div>
  )
}

export default NotFound
