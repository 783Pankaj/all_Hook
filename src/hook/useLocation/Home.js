import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import About from "./About";
import Index from "./Index";

const Home =()=>{
    return(
        <>
           <BrowserRouter>
           <Routes>
            <Route path="/index" element={<Index />}/>
            <Route path="/about" element={<About />}/>
           </Routes>
           </BrowserRouter>
        </>
    );
}
export default Home;