
import React, { useEffect, useState } from "react";
import Loding from "./Loding";

const Error_Handling_loding = () => {
    const [apiData, setApiData] = useState([])
    const [loding, setLoding] = useState()
    const getUser = async () => {
        try {
            setLoding(false)
            const res = await fetch("https://api.github.com/users")
            const data = await res.json()
            console.log(data)
            setApiData(data)
        } catch (error) {
            console.log("somthing went wrong")
        }
    }
    useEffect(() => {
        getUser()
    }, [])

    if(loding){
        return <Loding />
    }
    return (
        <div>
            <div style={{display:'flex' ,  flexWrap: 'wrap'}}>
                {
                    apiData.map((val) => {
                        const { id, login, type,avatar_url } = val
                        return <div key={id}>
                            <h1>{login}</h1>
                            <h2>{type}</h2>
                            <img src={avatar_url} alt="" width={'200px'} height={'200px'}/>
                        </div>
                    })
                }
            </div>
        </div>
    );
}

export default Error_Handling_loding;