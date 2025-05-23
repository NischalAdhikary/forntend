import React, { useEffect } from 'react'
import useAuth from '../hooks/Authhook'
import {  Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export default function Private() {
  const { user, loading, verifyToken } = useAuth()
  const navigate = useNavigate()
  console.log(user);
  


  useEffect(() => {
    
    verifyToken()
  }, [])

 
  if (loading) {
    return <div>Loading...</div>
  }

  if (!user) {
    return navigate('/login')
  }

 
  return <Outlet />
}