// // when we work with classComponent then we don't need to hook. for functional component hook is best friend. with the help of hook we can change the state ...update the state

// // useState() :- when we want to change the state value then we used the useState.here we pass the two things. first initial val and seconnd a function. 

// import React, { useState } from "react";

// function UseStateHook() {
//   const [name, setName] = useState("pankaj pal")
  
//   let a = 0
//   const changeName = () => {
//     var val = "pankaj kumar"
//     // if (a % 2 === 0) {
//     //   setName(val)
//     // } else {
//     //   setName("pankaj pal")
//     // }
//     // a++
//     //or
//     if(name=="pankaj pal"){
//       setName(val)
      
//         // document.getElementById('nameText').style.color="green"
      
//     }else{
//       setName("pankaj pal")
//       //  document.getElementById('nameText').style.color="red"
     
//     }
//   }

//   return (
//     <div>
//       <h1 style={{ color: name==="pankaj pal" ? 'red':'green'}}>{name}
//       </h1>
//       <p>hii i am {name}</p>

//       {/* <button onClick={(()=>name==="pankaj pal" ?setName("pankaj kumar"): setName("pankaj pal"))}
//       >Change Text</button> */}

//       <button onClick={changeName}
//       >Change Text</button>
    
//     </div>
//   );
// }
// export default UseStateHook;