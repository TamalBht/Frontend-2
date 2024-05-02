import React  from "react";
import { useState,useEffect } from "react";
import "./landing.css";
import {Link} from "react-router-dom";
import Typewriter from 'typewriter-effect';

function Landing(){

    return(
        <div className="landing-wrapper">
            <div className="lan-subwrapper">
                <p className="quote">
                   <Typewriter
                   options={{
                    strings: ['Be Productive'," Be Creative","Be Efficient","Stay Focused"],
                    autoStart: true,
                    loop:true
                   }} />
                </p>
                <Link to="/main"><p className="Button">Get Started</p></Link>
            </div>
        </div>
    );
}
export default Landing;