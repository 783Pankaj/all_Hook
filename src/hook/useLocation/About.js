import React from "react";

import { useLocation, useNavigate } from "react-router-dom";

const About =()=>{
    const navigate = useNavigate();
    const location = useLocation();
    
    console.log(location)
    return(
        <div>
            <h1>about Page</h1>
            <p>{`your path is ${location.pathname.replace("/","")}`}</p>
            {
                location.pathname==="/about/pankaj" ? <p>Hii, pankaj to see you again</p> : <p>login first</p>
            }
            <button onClick={()=>navigate('/index')}>Back to index page</button>
        </div>
    );
}
export default About;