import React from "react";
import "./landing.css";
import {Link} from "react-router-dom";
function Landing(){
    return(
        <div className="landing-wrapper">
            <div className="lan-subwrapper">
                <p className="quote">
                “Productivity is being able to do things that you were never able to do before.” <br/>-Franz Kafka
                </p>
                <Link to="/main"><p className="Button">Get Started</p></Link>
            </div>
        </div>
    );
}
export default Landing;