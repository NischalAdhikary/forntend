import React, { useEffect, useState } from 'react'
import Input from '../components/Input'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import useAuth from '../hooks/Authhook'
import { useApiErrorHandler } from '../hooks/useToast'

export default function Loginpage() {
    const {handleError}=useApiErrorHandler()
    const {login,user}=useAuth()
    const [email,setEmail]=useState('')
    const navigate=useNavigate()
    const [password,setPassword]=useState('')

  useEffect(()=>{
    if(user){
        navigate('/',{replace:true})
    }

  },[])
    
    const onChange=(e)=>{
        if(e.target.name=='email'){
            setEmail(e.target.value)
        }
        if(e.target.name=='password'){
            setPassword(e.target.value)
        }
    }
const handleSubmit=async(e)=>{

    e.preventDefault();
    try{
const success=await login(email,password)
if(success){
    navigate('/',{replace:true})
    }
   
}
catch(err){
   
   

 

}
}

  return (
    <div className='w-full relative h-screen flex justify-center gap-4 items-center'>
        <div className='w-2/3 h-2/3 flex rounded-lg  shadow-2xl '>
        <div className='w-1/2  '>
        <img src="/login.png" className='w-full h-full object-cover' alt="" />
        </div>
        <div className='w-1/2 px-6 flex flex-col justify-center items-center'>
       <div className='w-full  space-y-3'>
         <h1 className='text-3xl font-semibold '>Hello,</h1>
        <h1 className='text-3xl font-bold '>Welcome</h1>
        <form onSubmit={handleSubmit} className='flex flex-col gap-6 '>
            <div className='flex flex-col gap-2'>
 <label>Email</label>
            <Input name={'email'} placehoder={'Enter your email'} type={'email'} value={email} onChange={onChange}/>
            </div>
            <div className='flex flex-col gap-2'>
 <label>Password</label>
            <Input name={'password'} placehoder={'Enter your password'} type={'password'} value={password} onChange={onChange}/>
            </div>
            <p>Dont have an account? <span>
                {/* <a href="/register" className='text-blue-700'>Register</a>   */}
                <Link to={'/signup'} className='text-blue-700'>Register</Link>
                
                </span></p>
            <button className='bg-blue-700 self-center rounded-full border-0 px-10 py-2 text-lg font-semibold text-white'>Login</button>
           

        </form>

       </div>
       
        
        </div>
        </div>
      
    </div>
  )
}
