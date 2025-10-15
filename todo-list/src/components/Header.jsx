import React from 'react'
import { userAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

function Header() {
  const {userSignout, userName} = userAuth()
  const navigate = useNavigate()

  const handleSignOut = async () => {
    userSignout()
    navigate("/signin")
  }

  return (
    // <!-- Header -->
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold text-gray-800">My Todo List</h1>
      <h1 className="text-2xl font-bold text-gray-800">Welcome {userName}</h1>
      <button className="bg-gray-800 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition" onClick={handleSignOut}>
        Log Out
      </button>
    </div>
  )
}

export default Header
