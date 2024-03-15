import Home from "./pages/home";
import Detail from "./pages/detail";
import Voting from "./pages/voting";
import Login from "./pages/login";
import Register from "./pages/register";
import Add_paslon from "./pages/add_paslon";
import Add_Partai from "./pages/add_partai";
import Dashboard from "./pages/dasboard";
import List_paslon from "./pages/list_paslon";
import List_partai from "./pages/list_partai";
import Info from "./pages/info";
import { useState, useEffect } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App: React.FC = () => {

  const findpartai = async ()=> {
    try {
      const response = await fetch("http://localhost:5000/api/partais")

      console.log(await response.json());
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    findpartai()
  }, [])

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/voting" element={<Voting />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/paslon" element={<List_paslon />} />
          <Route path="/add_paslon" element={<Add_paslon />} />
          <Route path="/partai" element={<List_partai />} />
          <Route path="/add_partai" element={<Add_Partai />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/info" element={<Info />} />
        </Routes>
      </Router>

      </>
      );
};

      export default App;
