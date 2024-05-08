import React from "react";
import"./wrapper.css";
import apod from "./apod.jpg"

function Wrapper(){
    return(
        <div className="wrapper">
           <div className="img-bg">
            <img src={apod} alt="space"></img>
           </div>
        </div>
    );
}
export default Wrapper;