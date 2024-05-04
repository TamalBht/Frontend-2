function Addd(key,valuee){
    var valtoRender=valuee;
    if(typeof valuee==='object' && valuee !==null){
        valtoRender= JSON.stringify(valuee);
        console.log("if has been runned");
    }
    console.log(valtoRender);
    return(
        <div className="toDoInput">{}</div>
    );
}
export default Addd;