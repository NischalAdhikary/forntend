import React from 'react'
import Loginpage from './pages/Loginpage'
import { Routes,Route } from 'react-router-dom'
import Signup from './pages/Singup'

import Siderbar from './components/Siderbar'
import { AuthContextProvider } from './context/Authcontext'
import Private from './components/Private'
import Dashboard from './pages/Dashboard'
import { TaskContextProvider } from './context/taskcontext'

export default function App() {
  return (
    <div>
      <AuthContextProvider>
      <TaskContextProvider>
      <Routes>
     
            <Route path='/login' element={<Loginpage />}></Route>

        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route element={<Private></Private>}>
          <Route path='/' element={<Dashboard></Dashboard>}></Route>

        </Route>
        
      
        
      

      </Routes>
      </TaskContextProvider>
      </AuthContextProvider>
   
    </div>
  )
}
