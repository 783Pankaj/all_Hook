import React, { useEffect, useState } from "react";
import useTitle_Count from "./useTitle_Count";

const Custom_hook=()=>{
    const [count, setCount] = useState(0)
     // custom hook
       useTitle_Count(count)

    return (
        <div>
            <p>{count}</p>
            <button onClick={()=>{setCount(count+1)}}>+</button>
        </div>
    );
}
export default Custom_hook;