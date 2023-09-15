// Hooks are reusable functions.
// When you have component logic that needs to be used by multiple components, we can extract that logic to a custom Hook.

// Custom Hooks start with "use". Example: useFetch.

import  { useEffect } from "react";
// we make custome hook 
const useTitle_Count=(count)=>{
    useEffect(() => {
        if(count>=1){
            console.log("Hello useEffect")
            document.title=`count${count}`
        }
        else{
            document.title=`chats`
        }
        
    },[count])
}

export default useTitle_Count;