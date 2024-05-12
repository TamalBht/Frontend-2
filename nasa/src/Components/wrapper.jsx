import React, { useEffect, useState } from "react";
import"./wrapper.css";
import planet from "./planet.svg"
import Footer from "./Footer";
import { Info } from 'lucide-react';
import {Rocket} from 'lucide-react'


function Wrapper(){
    const [data,setData]= useState(null);
    const [loading,setLoading]=useState(false);

    useEffect(()=>{
      async function fetchAPIData(){
        
        const API_Key="oVMWv9Gqk3dkbTkhwylwNldBZ08vkzd8TSUgFnej";
        

        const url= 'https://api.nasa.gov/planetary/apod'+`?api_key=${API_Key}`
        try{
            const res =await fetch(url)
            const api_data = await res.json();
            setData(api_data);
            console.log("Data\n",api_data);
        }catch(err){
            console.log(err.message)
        }
      }
    //   fetchAPIData ()
    },[])
    console.log("Data Stored\n",data);


    
    return(
        <>
            
           {data!==null?( <div className="wrapper">
           <div className="img-bg">
            <img src={data.hdurl} alt="space"></img>
           </div>
           <div className="info-bar">
            
            {data!==null?(<Footer data={data}/>):<div className="loader"></div>}
        </div>
           
        </div>
       ):<div className="loader">
            <h1><Rocket className="rock"></Rocket><span className="loaderName">Loading</span></h1>
        </div>}
        </>
    );
}
export default Wrapper;