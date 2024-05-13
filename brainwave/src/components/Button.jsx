import React from "react";
import ButtonSvg from "../assets/svg/ButtonSvg"
const Button=({className, href, onClick,children , px,white})=>{
    const classes = `button relative inline-flex item-center justify-center h11 transition-colors hover:text-color-1 ${px || 'px-7'} ${white?'texxt-n-8':'text-n-1'} ${className||''}`
    const spanClasses=`relative z-10`;
    const renderButton =()=>(
        <button className={classes}>
            <span className={spanClasses}>{children}</span>
            {ButtonSvg(white)}
        </button>
    )
    return renderButton();
};
export default Button;