import {useState,useContext} from 'react'
import { TaskContext } from '../context/TaskContext'

function TaskForm() {
 const {createTask}= useContext(TaskContext)
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
const handleChage=(e)=>{
    e.preventDefault()
  
 
  createTask({title,description})
  setTitle("")
  setDescription("")
}

  return (
    <div className='max-w-md mx-auto'>
    <form onSubmit={handleChage} className="bg-slate-800 p-10 mb-4">
      <h1 className='text-2xl font-bold mb-3 text-white'>
        Crear tu tarea
      </h1>
        <input placeholder='write your task' onChange={(e)=> setTitle(e.target.value)
        } value={title} autoFocus className="bg-slate-300 p-3 w-full mb-2"  />
        <textarea placeholder=' escribe la descripcion' onChange={(e)=>setDescription(e.target.value)}value={description}   className="bg-slate-300 p-3 w-full mb-2"  >
           
        </textarea>

        <button className='bg-indigo-500  px-3 py-1 text-white'>
            guardar
        </button>
        </form>
        </div>
  )
}

export default TaskForm