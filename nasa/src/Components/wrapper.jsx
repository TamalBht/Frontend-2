import React from "react";
import"./wrapper.css";
import apod from "./apod.jpg"
import Footer from "./Footer";
import { Info } from 'lucide-react';


function Wrapper(){
    return(
        <>
            
            <div className="wrapper">
           <div className="img-bg">
            <img src={apod} alt="space"></img>
           </div>
           <div className="info-bar">
            <button><Info className="info-log"/></button>
            <Footer/>
        </div>
           
        </div>
       
        </>
    );
}
export default Wrapper;