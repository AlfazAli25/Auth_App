import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Nav() {
  const { user } = useAuth()
  return (
    <nav className="bg-white/50 backdrop-blur-sm border-b dark:bg-transparent">
      <div className="max-w-4xl mx-auto p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg" style={{background: 'linear-gradient(135deg,#6366F1,#8B5CF6)'}} />
          <div className="font-extrabold text-lg bg-clip-text text-transparent" style={{backgroundImage: 'linear-gradient(90deg,#6366F1,#8B5CF6)'}}>Auth App</div>
        </div>
        <div className="flex items-center space-x-4">
          {!user && <Link to="/login" className="text-gray-700 hover:text-primary-600">Login</Link>}
          {!user && <Link to="/register" className="text-gray-700 hover:text-primary-600">Register</Link>}
          {user && <Link to="/profile" className="text-gray-700 hover:text-primary-600">Profile</Link>}
        </div>
      </div>
    </nav>
  )
}
