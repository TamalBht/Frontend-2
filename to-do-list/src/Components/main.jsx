import React from "react";
import "./main.css"
import { useState } from "react";
import Addd from "./Add.js";
import ReactDOM from 'react-dom';
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
        
        

    };

    return(
        <div className="main-wrapper">
            <div className="main-subwrapper">
                <form  onSubmit={handleSubmit}>
                    <input type="text" placeholder="Enter your task" onChange={handleInput}></input>
                    <button type="submit">Add</button>
                </form>
                <div id="task-list">
                    {todo.map((inpValue,index)=>( <Addd key={index} valuee={inpValue}/>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Main;