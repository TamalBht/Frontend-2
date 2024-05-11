import React from "react";
import "./Footer.css"
function Footer(props){
    const des = "ergsr";
    const {data}=props
    return(
        <footer>
            <h1>{data?.title}</h1>
            <p>{data?.explanation}</p>
            <span>By <a href="https://tamal-bht-github-io.vercel.app/" target="_blank"rel="noreferrer">Tamal Bhattacharjee</a></span>
        </footer>
    );
}
export default Footer;