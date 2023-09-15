// UseCallback is just like a useMemo hook. but differnce between useMemo return the memorized value and useCallback return a memorized function.
// useCallback :- It is increas the performance of our project.

//https://www.youtube.com/watch?v=N62nXHTydpA&ab_channel=ThapaTechnical
//When we used useMemo and useCallback hook:-  when we want to only value then used useMemo but when we want full function with value the use useCallback
import React, { useCallback, useState } from "react";
import Todo from "./Todo";

const UseCallback_hook =()=>{
    const [count, setCount] = useState(0)
    const [todos, setTodos] = useState([])

    const increment = () =>{
        setCount(count +1)
    }
    const addTodo =  useCallback(()=>{
        setTodos((prev)=>[...prev, `new Entry`])
      },[todos]) // now, when todos button click then its called befour useCallback when we click the + button todo will call automatcally

   return(
    <div>
       <Todo todos={todos} addTodo={addTodo}/>  {/* when we pass the valriable and function both then used useCallback. but when pass the variable then used useMemo */}
       <hr/>

       <div>
        count :{count}
        <button onClick={increment}>+</button>
       </div>
    </div>
   );
}
export default UseCallback_hook;