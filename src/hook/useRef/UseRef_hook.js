// // Uncontrolled form :- Uncontrolled just line full html....useRef we use with uncontrolled form

// The useRef Hook allows you to persist values between renders.
// It can be used to store a mutable value that does not cause a re-render when updated.
// It can be used to access a DOM element directly.

// Does Not Cause Re-renders
// If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render.
// To avoid this, we can use the useRef Hook.

// useRef() only returns one item. It returns an Object called current.
// When we initialize useRef we set the initial value: useRef(0).

// The useRef hook is a built-in React hook that is used to directly access DOM nodes and persist a mutable value across re-renders of a component. The useRef hook is a function that accepts a maximum of one argument as the initial value and returns an object. The returned object has a special property called current.

import React, { useRef, useState } from "react";

const UseRef_hook = () => {
    const [show, setShow] = useState(false)
        //it like a useState only and its preserve the value. No rerender
        const name = useRef(null)


        const submitForm=(e)=>{
             e.preventDefault();
             console.log(name.current.value)
            const storeName = name.current.value
             storeName==="" ? alert("enter name") : setShow(true)

        }
      return(
        <div>
            <form action="" onSubmit={submitForm} >
               <div>
                <input type="text" placeholder="enter your name" id="name" ref={name}/>
               </div>
               <button>Submit</button>
            </form>
            <p>{show ? `your name is ${name.current.value}` : ""}</p>
        </div>
      );

}
export default UseRef_hook