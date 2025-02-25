import { useState } from "react";
import "./App.css";
import Navbar from "./Componets/Navbar";
import "@mantine/core/styles.css";

import { Button } from "@mantine/core";
import { useDispatch, useSelector } from "react-redux";
import { decment, incement, reset } from "./redux/counter";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Route, Routes } from "react-router-dom";

function App() {
  // const {count} = useSelector((state) => state.count);
  //  const dispatch = useDispatch()
   

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    
    </>
  );
}

export default App;
