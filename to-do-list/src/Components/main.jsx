import React from "react";
import "./main.css"
import { useState } from "react";
import Addd from "./Add.js";
import ReactDOM from 'react-dom';
function Main(){
    const [inpValue,setInpValue]=useState('');
    const [todo,setTodo]=useState([]);
    const handleInput=(e)=>{
        e.preventDefault();
        setInpValue(e.target.value);
        console.log(inpValue);
    };
    const handleSubmit=(e)=>{
        e.preventDefault();
        setTodo([...todo,]);
        
        

    };

    return(
        <div className="main-wrapper">
            <div className="main-subwrapper">
                <form on onSubmit={handleSubmit}>
                    <input type="text" placeholder="Enter your task" onChange={handleInput}></input>
                    <button type="submit">Add</button>
                </form>
                <div idName="task-list">
                    {todo}
                </div>
            </div>
        </div>
    )
}
export default Main;