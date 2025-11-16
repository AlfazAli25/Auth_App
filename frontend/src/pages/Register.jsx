import React, { useState } from 'react'
import api from '../utils/api'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [err, setErr] = useState(null)
  const navigate = useNavigate()
  const { login } = useAuth()

  const handle = e => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = async e => {
    e.preventDefault()
    setErr(null)
    try {
      const res = await api.post('/auth/register', form)
      login(res.data)
      navigate('/profile')
    } catch (error) {
      setErr(error.response?.data?.message || 'Registration failed')
    }
  }

  return (
    <div className="card">
      <h2 className="text-2xl font-semibold mb-4">Create your account</h2>
      {err && <div className="text-red-600 mb-2">{err}</div>}
      <form onSubmit={submit} className="space-y-3">
        <input name="name" placeholder="Name" value={form.name} onChange={handle} className="input" />
        <input name="email" placeholder="Email" value={form.email} onChange={handle} className="input" />
        <input name="password" type="password" placeholder="Password" value={form.password} onChange={handle} className="input" />
        <button className="btn-primary">Register</button>
      </form>
    </div>
  )
}
