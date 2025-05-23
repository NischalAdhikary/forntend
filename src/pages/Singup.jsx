import React, { useState } from 'react'
import Input from '../components/Input'
import { Link } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'

export default function Signup() {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    

    const onChange=(e)=>{
        if(e.target.name =='name'){
            setName(e.target.value)
        }
        if(e.target.name=='email'){
            setEmail(e.target.value)
        }
        if(e.target.name=='password'){
            setPassword(e.target.value)
        }
        console.log(name,email,password);
        
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
               const response=  await axios.post('http://localhost:5000/api/user/signup',{
            name,email,password
        },
        {withCredentials:true}

    )
    setName('')
    setEmail('')
    setPassword('')
    toast.success(response.data.message)

        }
        catch(err){
            toast.error(err)
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
         {/* <h1 className='text-3xl font-semibold '>Hello,</h1> */}
        <h1 className='text-3xl font-bold '>SignUp</h1>
        <form onSubmit={handleSubmit} className='flex flex-col gap-6 '>
             <div className='flex flex-col gap-2 relative'>
 <label>Name</label>
            <Input name={'name'} placehoder={'Enter your Name'} type={'text'} value={name} onChange={onChange}>
          
            </Input>
          
           
            </div>
            <div className='flex flex-col gap-2'>
 <label>Email</label>
            <Input name={'email'} placehoder={'Enter your email'} type={'email'} value={email} onChange={onChange}/>
            </div>
            <div className='flex flex-col gap-2'>
 <label>Password</label>
            <Input name={'password'} placehoder={'Enter your password'} type={'password'} value={password} onChange={onChange}/>
            </div>
            <p>Already have an account? <span>
               <Link to={'/'} className='text-blue-700'>Login</Link>
                
                </span></p>
            <button type='submit' className='bg-blue-700 self-center rounded-full border-0 px-10 py-2 text-lg font-semibold text-white'>Signup</button>
           

        </form>

       </div>
       
        
        </div>
        </div>
      
    </div>
  )
}
