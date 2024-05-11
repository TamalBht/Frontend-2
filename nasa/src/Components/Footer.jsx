import React from "react";
function Footer(props){
    const des = props;
    return(
        <footer>
            <p>{des}</p>
            By <a href="https://tamal-bht-github-io.vercel.app/" target="_blank"rel="noreferrer">Tamal Bhattacharjee</a>
        </footer>
    );
}
export default Footer;