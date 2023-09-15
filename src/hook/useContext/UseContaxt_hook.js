import React, { useContext } from "react";
import { name } from "./Data";

const UseContaxt_hook = () =>{
    let DataName = useContext(name)
    return(
        <div>
           <p>{DataName}</p>
        </div>
    );
}
export default UseContaxt_hook;