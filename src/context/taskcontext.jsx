import axios from "axios";
import { createContext, useState } from "react";

const TaskContext=createContext()

function TaskContextProvider({children}){
    const [task,setTask]=useState([])
    const [loading,setLoading]=useState(false)

    const fetchtodo =async()=>{
        try{

            setLoading( true)
            
            const response =await axios.get('http://localhost:5000/api/task/gettasks',{
                withCredentials:true
            })
            console.log(response.status);
            if(response.status ===200){
                setTask(response.data.tasks)
                console.log(response.data);
                
            }
        }
        catch(err){
            throw err
        }
        finally{
            setTimeout(() => {
                setLoading(false)
            },4000)
            
        }
    }

    const addtodo =async(title,description,)=>{
        try{
            const response =await axios.post('http://localhost:5000/api/task/create',{
                title,
                description,
                
            },{
                withCredentials:true
            })

            setTask(prevTasks => [...prevTasks, response.data.task])

            
        }
        catch(err){
            throw err
        }
    }
    const edittodo=async(id,title,description)=>{
        try{
            const response=await axios.put(`http://localhost:5000/api/task/update/${id}`,{
                title,
                description
            },{
                withCredentials:true    
            })
            const updatedTask=response.data.task
            setTask(prevTasks => prevTasks.map(task => task._id === id ? updatedTask : task))


            


        }
        catch(err){
            throw err
        }


    }
    const deletetodo =async(id)=>{
        try{
            const response=await axios.delete(`http://localhost:5000/api/task/delete/${id}`,{
                withCredentials:true
            })
            setTask(prevTasks => prevTasks.filter(task => task._id !== id))
        }
        catch(err){
            throw err
        }


    }
    







    return <TaskContext.Provider value={{task,fetchtodo,addtodo,edittodo,deletetodo,loading}}>
        {children}
    </TaskContext.Provider>
}
export {TaskContextProvider}
export default TaskContext