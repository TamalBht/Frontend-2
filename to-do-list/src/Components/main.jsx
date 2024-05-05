import React from "react";
import "./main.css"
import { useState } from "react";
import { CircleCheck } from 'lucide-react';
function Main(){
    const [inpValue,setInpValue]=useState('');
    const [todo,setTodo]=useState([]);
   
    const handleInput=(e)=>{
        e.preventDefault();
        setInpValue(e.target.value);
    };
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(inpValue);
        setTodo([...todo, { text: inpValue, completed: false }]); 
        console.log(todo);
        
        e.target.reset();
     
    };
    
    const handleComplete=(index)=>{
        const newTodo = todo.slice();
        newTodo[index].completed = !newTodo[index].completed;
        setTodo(newTodo);
        
      

    }

    return(
        <div className="main-wrapper">
            <div className="main-subwrapper">
                <form  onSubmit={handleSubmit}>
                    <input type="text" placeholder="Enter your task" onChange={handleInput}required></input>
                    <button type="submit">Add</button>
                </form>
                <ul>
                    {todo.map((task,index)=>(
                         <li key={index} className={task.completed ? "completed-task" : ""}>
                         <button onClick={() => handleComplete(index)}>
                             <CircleCheck className={task.completed ? "complete" : ""} />
                         </button>
                         <span className={task.completed ? "complete-text" : ""}>{task.text}</span>
                     </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
export default Main;