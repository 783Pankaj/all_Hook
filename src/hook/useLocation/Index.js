import React from "react";
import { useLocation } from "react-router-dom";

const Index =()=>{
    const location = useLocation()
    console.log(location)
    return(
        <div>
            <h1>Index Page</h1>
            <p>{`your path is ${location.pathname.replace("/","")}`}</p>
         
        </div>
    );
}
export default Index;