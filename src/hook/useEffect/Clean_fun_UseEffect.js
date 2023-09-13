// in react useEffect provides byDefalut cleanup function

import React, { useEffect, useState } from "react";

const Clean_fun_UseEffect = () => {
    const [widthCount, setWidthCount] = useState(window.screen.width)
    const actualWidth = () => {
        console.log(window.innerWidth)
        setWidthCount(window.innerWidth)
    }
    useEffect(() => {
        window.addEventListener("resize", actualWidth)

        return()=>{   //cleanup function.
            window.removeEventListener("resize", actualWidth)   
        }
    })

    return (
        <div>
            <p>The actual size of the window</p>
            <h1>{widthCount}</h1>
        </div>
    );
}
export default Clean_fun_UseEffect;