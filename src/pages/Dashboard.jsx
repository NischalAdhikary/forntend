import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Siderbar'
import Breadcrump from '../components/Breadcrump'
import Breadcrumb from '../components/Breadcrump'
import Todocard from '../components/Todocard'
import Modals from '../components/Modals'
import axios from 'axios'
import useTask from '../hooks/taskhooks'
import useModals from '../hooks/modals.hooks'
import SkeletonCard from '../components/skeletopncar'


export default function Dashboard() {
  const {task,fetchtodo,addtodo,loading}=useTask();
  const {closeModal,toggleModal,isOpen}=useModals();
  
 

  useEffect(()=>{
    fetchtodo()
    
 

  }
  ,[])
  const handlesubmit=async(e)=>{
    e.preventDefault()
    try{

    
    const title=e.target[0].value
    const description=e.target[1].value
   
     await addtodo(title,description)
     closeModal()
      
      
    }
    catch(err){
      throw err
    }
  }

  return (
    <div className='w-full h-screen  flex '>
      
       <Sidebar></Sidebar>
       <div className='flex-1 h-full  overflow-y-auto  '>
        
            <Breadcrumb />
            <div className='flex justify-between px-4 py-2'>
              <h1 className='text-3xl'>{`Tasks(${task.length})`}</h1>
              <button onClick={toggleModal} className='bg-green-400 text-xl px-8 py-2 rounded font-bold text-white cursor-pointer'>Add Task</button>
            </div>
           <div className='p-8 gap-6 grid md:grid-cols-3 lg:grid-cols-4 place-items-center'>
  {loading
    ? Array(8)
        .fill(0)
        .map((_, i) => <SkeletonCard key={i} />)
    : task.map((item, index) => (
        <Todocard key={item._id} task={item} index={index + 1} />
      ))}
</div>

            
          
            
           

        
       </div>
      {isOpen && <Modals onClose={closeModal}>
        <h1 className='text-2xl mb-3 font-bold'>Add Task</h1>
        <form onSubmit={handlesubmit} className='flex flex-col space-y-7'>
          <input type="text" placeholder='Title' className='border border-gray-300 p-2 rounded' />
          <input type="text" placeholder='Description' className='border border-gray-300 p-2 rounded' />
          <button className='bg-green-400 text-xl px-8 py-2 rounded font-bold text-white cursor-pointer'>Add Task</button>
        </form>
        </Modals>
      }
        
     
      
      
       
      
    </div>
  )
}
