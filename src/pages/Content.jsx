import React, { use, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Content() {
    const[user,setUser]=useState(true)
    const navigate=useNavigate()
    useEffect(()=>{
        if(user){
            console.log("User is available")
        }
        else{
            console.log("User is not available")
            navigate('/')
        }



    })

    

  return (
    <div>
        This is render after Login only if user is available
      
    </div>
  )
}
