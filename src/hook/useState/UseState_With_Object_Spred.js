import React, { useState } from "react";

const UseState_with_Object_Spred=()=>{
    // const obj={
    //   person1:{
    //     name:"pankaj pal",
    //     age:23,
    //     study:"B.tech",
    //   },
    //   person2:{
    //     name:"Ravi pal",
    //     age:25,
    //     study:"B.tech",
    //   }
    // }
    // console.log(obj)
    // const [myObj, setMyObj]=useState(obj)

    //OR
    
    const [myObj, setMyObj]=useState({
        
          name:"pankaj pal",
          age:23,
          study:"B.tech",
        })
  console.log(myObj)
  const upDateFun=()=>{
    setMyObj({...myObj,name:"sumit"})  // ... spred opreate store the all previous value..if we will not use ... opreter and we want to update the name then age and study automatcally update as a undefiend.
    console.log(myObj)
  }
    return(
        <div>
            <h3>
                {
                   `name: ${ myObj.name} age: ${myObj.age} `
                }
            </h3>
            <button onClick={upDateFun}>Update</button>
        </div>
    );
}
export default UseState_with_Object_Spred;