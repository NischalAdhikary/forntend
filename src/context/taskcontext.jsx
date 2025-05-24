import axios from "axios";
import { createContext, useState } from "react";
import API from "../libs/axios";

const TaskContext=createContext()

function TaskContextProvider({children}){
    const [task,setTask]=useState([])
    const [loading,setLoading]=useState(false)

    const fetchtodo =async()=>{
        try{

            setLoading( true)
            
           
            const response =await API.get('/task/gettasks')
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
            setLoading(false)
            
        }
    }

    const addtodo =async(title,description,)=>{
        try{
           
            const response= await API.post('/task/create',{
                title,
                description
            })

            setTask(prevTasks => [...prevTasks, response.data.task])

            
        }
        catch(err){
            throw err
        }
    }
    const edittodo=async(id,title,description)=>{
        try{
           
            const response = await API.put(`/task/update/${id}`, {
                title,
                description
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
            const response=await axios.delete(`https://backend-1bee.onrender.com/api/task/delete/${id}`,{
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