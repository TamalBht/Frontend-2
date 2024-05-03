import React from "react";
import "./main.css"
import { useState } from "react";
function Main(){
  
    return(
        <div className="main-wrapper">
            <div className="main-subwrapper">
                <form>
                    <input type="text" placeholder="Enter your task"></input>
                    <button type="submit">Add</button>
                </form>
            </div>
        </div>
    )
}
export default Main;