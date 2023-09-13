
// 1: Always write it inside the component or function
// 2: Component name must be PascalCase (first letter should be ippercase)
// 3: we can directly import or we can directly write it using React.hookname
// 4: Don't call hoke inside loops, conditions, or nested functions

import React, { useState } from "react";

const UseStateHookRules=()=>{
    const[myName , setMyName]=useState("pankaj pal")
    
    // if(true){
    //     const[myName , setMyName]=useState("pankaj pal") XXXXX
    // }
   return(
    <div>
       <h1>{myName}</h1>
    </div>
   );   
}
export default UseStateHookRules;