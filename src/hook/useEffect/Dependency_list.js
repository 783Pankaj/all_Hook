//we use multipale useEffect
import React, { useEffect, useState } from "react";

const Dependency_list=()=>{
    const [count, setCount] = useState(0)
    useEffect(() => {
        if(count>=1){
            console.log("Hello useEffect")
            document.title=`chat ${count}`
        }
        else{
            document.title=`chats`
        }
        
    },[count])   // useState does rerender the component. so useEffect run again . if we want useEffect run only one time the pass the dependency --->[]
    
    console.log("hello outside")  // first that run

    useEffect(()=>{
        if(count>=1){
            console.log("Hello useEffect")
            document.title=`chat ${count}`
        }
        else{
            document.title=`chats`
        }
    },[count])
    return (
        <div>
            <p>{count}</p>
            <button onClick={()=>{setCount(count+1)}}>+</button>
            <button onClick={()=>{setCount(count-1)}}>-</button>
        </div>
    );
}
export default Dependency_list;