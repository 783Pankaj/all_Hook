import axios from "axios";
import React, { useEffect, useState } from "react";

const Github_user=()=>{
    const [apiData, setApiData] = useState([])
        // useEffect(()=>{
        //     axios.get("https://api.github.com/users").then((res)=>setApiData(res.data))
        // },[])
        // console.log(apiData)
        
        //OR

        const getUser = async()=>{
            const res =await fetch("https://api.github.com/users")
            const data = await res.json()
            console.log(data)
            setApiData(data)
        }
        useEffect(()=>{
            getUser()
        },[])
    return(
        <div>
            <div>
                {
                    apiData.slice(0,5).map((val)=>{
                        const {id, login, type} = val
                        return <div key={id}>
                           <h1>{login}</h1>
                           <h2>{type}</h2>
                        </div>
                    })
                }
            </div>
        </div>
    );
}

export default Github_user;