import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { GoogleLogin } from '@react-oauth/google'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import FirstLoginForm from '../components/FirstLoginForm'

function SignInPage() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [error, setError] = useState('')
  const [showFirstLogin, setShowFirstLogin] = useState(false)

  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const res = await fetch('http://localhost:5000/api/auth/google-login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ token: credentialResponse.credential })
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.msg || 'Login failed')
        return
      }

      login(data.user, data.token, data.loginLogId)

      if (data.isNewUser || !data.user.branch || !data.user.year) {
        setShowFirstLogin(true)
      } else {
        navigate('/')
      }
    } catch (err) {
      console.error('Login error:', err)
      setError('Server connection failed')
    }
  }

  const handleGoogleError = () => {
    setError('Google Login Failed')
  }

  const onFirstLoginComplete = () => {
    setShowFirstLogin(false)
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-[#0F101D] text-white flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[var(--color-cyan)] opacity-[0.05] rounded-full blur-[100px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600 opacity-[0.05] rounded-full blur-[100px]" />
      
      {showFirstLogin && <FirstLoginForm onComplete={onFirstLoginComplete} />}

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="bg-[#151625]/80 backdrop-blur-xl border border-[rgba(0,229,255,0.1)] rounded-2xl p-8 shadow-[0_0_40px_rgba(0,0,0,0.3)] text-center">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
            <p className="text-white/60">Sign in with your Nirma University email</p>
          </div>

          {error && (
            <div className="mb-6 p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-200 text-sm">
              {error}
            </div>
          )}

          <div className="flex justify-center">
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={handleGoogleError}
              theme="filled_black"
              size="large"
              shape="pill"
              text="continue_with"
            />
          </div>

          <p className="mt-6 text-sm text-white/40">
            Only @nirmauni.ac.in emails are allowed.
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export default SignInPage
