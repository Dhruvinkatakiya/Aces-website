import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function SignInPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Sign in attempt:', formData)
    // Add authentication logic here
  }

  return (
    <div className="min-h-screen bg-[#0F101D] text-white flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[var(--color-cyan)] opacity-[0.05] rounded-full blur-[100px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600 opacity-[0.05] rounded-full blur-[100px]" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="bg-[#151625]/80 backdrop-blur-xl border border-[rgba(0,229,255,0.1)] rounded-2xl p-8 shadow-[0_0_40px_rgba(0,0,0,0.3)]">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
            <p className="text-white/60">Sign in to continue to ACES</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/80 ml-1">Email Address</label>
              <div className="relative group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full bg-[#0A0B14] border border-[rgba(0,229,255,0.1)] rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[var(--color-cyan)] focus:shadow-[0_0_15px_rgba(0,229,255,0.1)] transition-all duration-300"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="text-sm font-medium text-white/80">Password</label>
                <Link to="/forgot-password" className="text-xs text-[var(--color-cyan)] hover:text-cyan-300 transition-colors">
                  Forgot Password?
                </Link>
              </div>
              <div className="relative group">
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="w-full bg-[#0A0B14] border border-[rgba(0,229,255,0.1)] rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[var(--color-cyan)] focus:shadow-[0_0_15px_rgba(0,229,255,0.1)] transition-all duration-300"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[var(--color-cyan)] to-cyan-600 text-[#0F101D] font-bold py-3.5 rounded-xl hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              Sign In
            </button>
          </form>

          {/* Footer */}
          <div className="mt-8 text-center text-sm text-white/60">
            Don't have an account?{' '}
            <Link to="/signup" className="text-[var(--color-cyan)] font-medium hover:text-cyan-300 transition-colors">
              Sign Up
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default SignInPage
