import React from "react";
function Footer(props){
    const des = "ergsr";
    const {data}=props
    return(
        <footer>
            <h1>{data?.title}</h1>
            <p>{data?.explanation}</p>
            By <a href="https://tamal-bht-github-io.vercel.app/" target="_blank"rel="noreferrer">Tamal Bhattacharjee</a>
        </footer>
    );
}
export default Footer;