
import React, { memo } from "react";

const Todo =({todos, addTodo})=>{
    console.log("child render") // jab jab add karenge to ye vi call hoga isko rokne ke liye useCallback we used
   return(
    <div>
       <h2>My Todo</h2>
       {
          todos.map((todo, index)=>{
            return<p key={index}>{todo+index}</p>
          })
       }
       <button onClick={addTodo}>Add Todo</button>
    </div>
   );
}
export default memo(Todo);

// memo:- it is high order component:- Using memo will cause React to skip rendering a component if its props have not changed.

// This can improve performance.