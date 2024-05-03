import React from "react";
import "./main.css"
import { useState } from "react";
import Addd from "./Add.js";
function Main(){
    const [inpValue,setInpValue]=useState('');
    const handleInput=(e)=>{
        e.preventDefault();
        setInpValue(e.target.value);
        console.log(inpValue);
    };
    const handleSubmit=(val)=>{};

    return(
        <div className="main-wrapper">
            <div className="main-subwrapper">
                <form>
                    <input type="text" placeholder="Enter your task" onChange={handleInput}></input>
                    <button type="submit">Add</button>
                </form>
            </div>
        </div>
    )
}
export default Main;