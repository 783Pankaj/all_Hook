// useMemo :- it is incress the proformance of application. useMemo does not side effect
// difference :-  useCallback hook:- useMemo return a memorized value and useCallback return a memorized callback function

//When we used useMemo and useCallback hook:-  when we want to only value then used useMemo but when we want full function with value the use useCallback
import React, { useMemo, useState } from "react";

const UseMemo_hook=()=>{
    const [myNum, setMyNum] = useState(0);
    const [show, setShow] = useState(false)

    const getValue =()=>{
        return setMyNum(myNum+1)
    }

    const countNumber = (num) =>{
        console.log("num values is: ", num);
        for(let i=0; i<=1000000000; i++){}
        return num
    }
    //In useEffect hook we can not return the value and store the value. but  In useMemo we can do it. useMemo just like a UseEffect but useMemo gves a power to return the value and store the value in variable
   const checkData=  useMemo(()=>{
         return countNumber(myNum)
     },[myNum])
    return(
        <div>
            <button onClick={getValue} style={{backgroundColor:'red'}}>count</button>
            <p>my new number : {checkData}</p>

            <button onClick={()=>setShow(!show)}>
                {show ? "You clicked me" : "cleck me plz"}
            </button>
        </div>
    );

}
export default UseMemo_hook;