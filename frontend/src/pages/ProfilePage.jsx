import React from 'react'
import { motion } from 'framer-motion'
import { useAuth } from '../context/AuthContext'
import { Navigate } from 'react-router-dom'

function ProfilePage() {
  const { user, loading, logout } = useAuth()

  if (loading) return <div className="min-h-screen bg-[#0F101D] text-white flex items-center justify-center">Loading...</div>
  if (!user) return <Navigate to="/signin" />

  return (
    <div className="min-h-screen bg-[#0F101D] text-white pt-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#151625]/80 backdrop-blur-xl border border-[rgba(0,229,255,0.1)] rounded-2xl p-8 shadow-[0_0_40px_rgba(0,0,0,0.3)]"
        >
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="relative">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[var(--color-cyan)] shadow-[0_0_20px_rgba(0,229,255,0.3)]">
                <img 
                  src={user.picture || "https://via.placeholder.com/150"} 
                  alt={user.name} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="flex-1 text-center md:text-left space-y-4">
              <div>
                <h1 className="text-3xl font-bold text-white">{user.name}</h1>
                <p className="text-[var(--color-cyan)]">{user.email}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-[#0A0B14] p-6 rounded-xl border border-[rgba(255,255,255,0.05)]">
                <div>
                  <label className="text-sm text-white/50 block mb-1">Branch</label>
                  <p className="text-lg font-medium">{user.branch || 'Not Set'}</p>
                </div>
                <div>
                  <label className="text-sm text-white/50 block mb-1">Year</label>
                  <p className="text-lg font-medium">{user.year ? `${user.year} Year` : 'Not Set'}</p>
                </div>
              </div>

              <div className="pt-4">
                <button 
                  onClick={logout}
                  className="px-6 py-2 bg-red-500/10 border border-red-500/30 text-red-400 rounded-lg hover:bg-red-500/20 transition-colors"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ProfilePage
