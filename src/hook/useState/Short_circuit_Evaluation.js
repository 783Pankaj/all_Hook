import React, { useState } from "react";

const Short_circuit_Evaluation = () => {
    const [val, setVal] = useState("pal")
    return(
        <div>
        {/* {
            if(true){
                <h1>hello</h1>    we camnot use this type condition statement in react so we used short circuit evluation
            }
        } */}

        {/* short cu]ircuit evaluation rerender the multipale satate */}
             <h1>{val || "pankaj"}</h1> {/* || if val ka data will empty then || opreater run right side ---> pankaj but if we have some date in val then ...|| opreter run the val data  */}
            <h2>{val && "pankaj"}</h2>    {/* in && oprater both side data should be */}  
        </div>
    );
}
export default Short_circuit_Evaluation;