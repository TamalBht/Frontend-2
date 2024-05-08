import React, { useEffect } from "react";
import"./wrapper.css";
import apod from "./apod.jpg"
import Footer from "./Footer";
import { Info } from 'lucide-react';


function Wrapper(){
    const Key = process.env.REACT_APP_NASA_API_KEY;

    useEffect(()=>{
      async function fetchAPIData(){
        const Key = process.env.REACT_APP_NASA_API_KEY;
        console.log(Key);

        // const url= 'https://api.nasa.gov/planetary/apod'+`?api_key=${Key}`
        // try{
        //     const res =await fetch(url)
        //     const data = await res.json();
        //     console.log("Data\n",data);
        // }catch(err){
        //     console.log(err.message)
        // }
      }
      fetchAPIData ()
    },[])
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