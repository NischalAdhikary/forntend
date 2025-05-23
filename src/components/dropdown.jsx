import React, { useRef, useState } from 'react'
import Modals from './Modals'
import useTask from '../hooks/taskhooks'
import useTaskActions from '../hooks/task.hooks'
import useModals from '../hooks/modals.hooks'
export default function Dropdown({options,task,onClose}) {
   
    const {openModal,closeModal,isOpen}=useModals()
    const {deleteTask,updateTask}=useTaskActions()
   
 const [title, setTitle] = useState(task.title) 
    const [description, setDescription] = useState(task.description) 

    
    
    const handleToggle=async(value)=>{
       
        
        if(value==='edit'){
          openModal()
         
           
        }
        if(value==='delete'){
          
         await deleteTask(task._id)
          
         

        }


       
        

    
    }
    


    const handleClose=()=>{
      
       closeModal()
    }
    const handleSubmit=async(e)=>{
      e.preventDefault()
     await updateTask(task._id,title,description)
     handleClose()
     onClose()


    

    }
  return (
    <div className='w-40 bg-white   rounded border right-1  top-10 absolute border-gray-300'>
      {options.map((item, index) => (
        <div onClick={()=>handleToggle(item.value)}  key={index} className='p-2 hover:bg-gray-200 text-center cursor-pointer'>
          {item.label}
          
        </div>
      ))} 
      {isOpen && <Modals onClose={closeModal} >
        <div>
             <h1 className='text-3xl font-bold'>Edit the task</h1>
                        <form onSubmit={handleSubmit} className='flex flex-col space-y-4'>
                            <input 
                                type="text" 
                                placeholder='Title' 
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className='border border-gray-300 p-2 rounded' 
                            />
                            <input 
                                type="text" 
                                placeholder='Description' 
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className='border border-gray-300 p-2 rounded' 
                            />
                            <button className='bg-green-400 text-white font-bold text-xl px-4 py-2 rounded'>
                                Update
                            </button>
                        </form>
            
        </div>  
        
         </Modals> }
     
    </div>
  )
}
