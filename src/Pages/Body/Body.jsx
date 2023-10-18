import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../Home/Home";
import { Consola } from "../../Common/Consola/Consola"; // Importa Consola

export const Body = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/consola" element={<Consola />} /> */}
      </Routes>
  );
};