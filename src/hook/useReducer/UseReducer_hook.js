// The useReducer Hook is similar to the useState Hook.
// It allows for custom state logic.
// If you find yourself keeping track of multiple pieces of state that rely on complex logic, useReducer may be useful.

// Syntax
// The useReducer Hook accepts two arguments.
// useReducer(<reducer>, <initialState>)   --> reducer:- it is a pure function(pure function:- the function does not provide any side Effect)........initialState:- current state
// The reducer function contains your custom state logic and the initialState can be a simple value but generally will contain an object.
// The useReducer Hook returns the current stateand a dispatchmethod.

// where use:- when we use multipale state in your big project there useReducer we will use
//Redux made upon usereducer. in project we used Redux. in place of useReducer

//https://medium.com/@avicsebooks/react-hooks-usereducer-d40eeedd4fd0 


import React, { useReducer } from "react";

let initialState = 0
const reducer = (state, action) => {
    console.log(state, action)
    if(action.type==="INCREMENT"){
        return state +1
    }
    if(action.type==="DECREMENT"){
        return state -1
    }
    return state
}
const UseReducer_hook = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <p>{state}</p>

            <div>
                <button onClick={()=>dispatch({type:"INCREMENT"})}>Inc</button>
                <button onClick={()=>dispatch({type:"DECREMENT"})}>DEC</button>
            </div>
        </div>
    );
}
export default UseReducer_hook;