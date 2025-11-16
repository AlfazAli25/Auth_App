import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Nav from './components/Nav'
import { useAuth } from './context/AuthContext'

export default function App() {
  const { user } = useAuth();
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-grow flex items-center justify-center py-12">
        <div className="w-full max-w-2xl px-6">
          <div className="flex items-start gap-8">
            <div className="hidden md:block flex-1">
              <div className="rounded-3xl p-6 card">
                <h1 className="text-3xl font-extrabold mb-2">Welcome to Auth App</h1>
                <p className="text-gray-600 dark:text-gray-300">Secure authentication powered by JWT and MongoDB. Create an account or log in to view and manage your profile.</p>
              </div>
            </div>
            <div className="flex-1">
              <div className="card">
                <Routes>
                  <Route path="/" element={<Navigate to={user ? '/profile' : '/login'} />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/profile" element={user ? <Profile /> : <Navigate to="/login" />} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
