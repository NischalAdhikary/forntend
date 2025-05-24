import React, { useEffect } from 'react'
import useAuth from '../hooks/Authhook'
import {  Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export default function Private() {
  const { user, verifyToken } = useAuth()
  const navigate = useNavigate()
  console.log(user);
  


  useEffect(() => {
    
    verifyToken()
  }, [])

 
  

  if (!user) {
    return navigate('/login')
  }

 
  return <Outlet />
}