import React, { useEffect, useState } from "react";
import"./wrapper.css";
import apod from "./apod.jpg"
import Footer from "./Footer";
import { Info } from 'lucide-react';


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
      fetchAPIData ()
    },[])
    console.log(data);
    const api_url=`${data.url}`
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