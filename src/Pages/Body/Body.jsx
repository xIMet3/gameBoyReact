import React from "react";
import { Routes, Route } from "react-router-dom";

export const Body = () => {
    return(
        <>
            <Routes>
                <Route path="/" element={<Home/>} />
            </Routes>
        </>
        
    )
}