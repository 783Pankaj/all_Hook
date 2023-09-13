// UseEffect :- when our page is lode first time UseEffect called automatcally.The Effect Hook lets you perform side effects in function components. when all work will complete then useEffect startes the work  hook must be call top level of component. we cannot use  hook inside of condition , loop. we can use condition and loop inside hook.(hook ke ander consdition and loop use kar skte hai but condition and loop ke ander hook ko use nhi kar skte hai...but hook ke variable and function use kar skte hai )



import React, { useEffect, useState } from "react";

const UseEffect_hook = () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        if(count>=1){
            console.log("Hello useEffect")
            document.title=`count${count}`
        }
        else{
            document.title=`chats`
        }
        
    })   // useState does rerender the component. so useEffect run again . if we want useEffect run only one time the pass the dependency --->[]

    console.log("hello outside")  // first that run
    return (
        <div>
            <p>{count}</p>
            <button onClick={()=>{setCount(count+1)}}>+</button>
        </div>
    );
}
export default UseEffect_hook;