import React, { createContext, useState } from "react";
import UseContaxt_hook from "./UseContaxt_hook";

export const name = createContext()
const Data = () =>{
   const fname = "pankaj"
   const lname = "pal"
   const allData = [fname, lname]
    return(
        <div>
          <name.Provider value={allData}>
            <UseContaxt_hook />
          </name.Provider>
        </div>
    );
}
export default Data;