import axios from "axios";
import React, { useEffect, useState } from "react";

const FetchData=()=>{
    const [myData, setMyData]=useState([]);
     useEffect(()=>{
   axios.get("https://jsonplaceholder.typicode.com/posts")
//    .then((res)=>console.log(res))
   .then((res)=>setMyData(res.data))
  },[]);
    return(
        <div>
           {myData.map((apidata)=>{
            const {id, title}=apidata
            return <div key={id} >
                <h1>{id}</h1>
                <h2>{title}</h2>
            </div>
           })}
        </div>
    );
}
export default FetchData;