import React from "react";
import './Random.css';
function Random(){
    function name(){
    const arr=["hari","muthu","suvin","prasath"];
    const i=Math.floor(Math.random()*4);
    return arr[i];
    }
    return(
        <div className="fir">
             <div>Hi My Name is {name()}</div>
        </div>
       
    )
}
export default Random;