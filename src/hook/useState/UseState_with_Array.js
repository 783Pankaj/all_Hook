import React, { useState } from "react";

const biodata = [
    {
        id: 0,
        myName: "pankaj pal",
        age: 23
    },
    {
        id: 1,
        myName: "Ravi pal",
        age: 25
    }
]

const UseState_with_Array = () => {
    const [myArray, setMyArray] = useState(biodata);
    const clearFun = (e) => {
        // biodata =[] // error :- we can not reasign the const biodata. if we change the variable type const to var then we can reasign the value but our window screen value naver change. so for that we used useState
       
        setMyArray([])
    }
    console.log(biodata)

    const removeFun=(id)=>{
        const MynewArray = myArray.filter((currVal)=>{
            return currVal.id!==id  // jo match karega usko filter remove kar dega arrya se jo match nhi karega usko return karke ke MynewArray me store kra dega
        })

        setMyArray(MynewArray)
     console.log(id)
    }
    return (
        <div>
            {
                myArray.map((val) => {
                    return <div key={val.id}>
                        <h1>{val.id}</h1>
                        <h1>{val.myName}</h1>
                        <h1>{val.age}</h1>
                        <button onClick={()=>removeFun(val.id)}>remove</button> {/* when we use the () with function . react call the function automatcally. so we used ()=> --- callBack function*/}
                    </div>
                })

            }
            <button onClick={clearFun}>Clear</button>
        </div>
    );

}
export default UseState_with_Array;