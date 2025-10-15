import React from 'react'
import { userAuth } from '../context/AuthContext'
import { Navigate } from 'react-router-dom'

function ProtectedRoute({children}) {
  const {session} = userAuth()

  return (
    <> {session ? <> {children} </> : <Navigate to={"/signup"} /> }  </>
  )
}

export default ProtectedRoute
