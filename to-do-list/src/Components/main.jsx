import React from "react";
import "./main.css"
import { useState } from "react";
import { CircleCheck } from 'lucide-react';
function Main(){
    const [inpValue,setInpValue]=useState('');
    const [todo,setTodo]=useState([]);
    var obj;
    var index=-1;
    const handleInput=(e)=>{
        e.preventDefault();
        setInpValue(e.target.value);
    };
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(inpValue);
        setTodo([...todo,inpValue]); 
        console.log(todo);
        index=index+1;
        e.target.reset();
     
    };
    
    const handleComplete=()=>{
        const tickk= document.querySelector('.tick');
        tickk.classList.add("complete");
        
      

    }

    return(
        <div className="main-wrapper">
            <div className="main-subwrapper">
                <form  onSubmit={handleSubmit}>
                    <input type="text" placeholder="Enter your task" onChange={handleInput}required></input>
                    <button type="submit">Add</button>
                </form>
                <ul>
                    {todo.map((inpValue,index)=>(
                        <li key={index}>
                            <button onClick={handleComplete}><CircleCheck className="tick"/></button><span id={index}>{inpValue}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
export default Main;