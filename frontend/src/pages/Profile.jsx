import React, { useEffect, useState } from 'react'
import api from '../utils/api'
import { useAuth } from '../context/AuthContext'

export default function Profile() {
  const { user, logout } = useAuth()
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchMe = async () => {
      setLoading(true)
      try {
        const res = await api.get('/auth/me')
        setData(res.data.user)
      } catch (err) {
        console.error(err)
      } finally { setLoading(false) }
    }
    fetchMe()
  }, [])

  const doLogout = async () => {
    try {
      await api.post('/auth/logout')
    } catch (err) {
      // ignore
    }
    logout()
  }

  return (
    <div className="card">
      <h2 className="text-2xl font-semibold mb-4">Profile</h2>
      {loading && <div>Loading...</div>}
      {data && (
        <div>
          <div className="mb-2"><strong>Name:</strong> {data.name}</div>
          <div className="mb-2"><strong>Email:</strong> {data.email}</div>
        </div>
      )}
      <button className="mt-4 btn-danger" onClick={doLogout}>Logout</button>
    </div>
  )
}
