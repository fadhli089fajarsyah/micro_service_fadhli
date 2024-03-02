import Home from "./pages/home";
import Detail from "./pages/detail";
import Voting from "./pages/voting";
import Login from "./pages/login";
import Regrister from "./pages/regrister";
import Add_paslon from "./pages/add_paslon";
import Add_Partai from "./pages/add_partai";
import Dasboard from "./pages/dasboard";
import List_paslon from "./pages/list_paslon";
import List_partai from "./pages/list_partai";
import Info from "./pages/info";
import { useState } from "react";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoggedInAdmin, setIsLoggedInAdmin] = useState(false);
  const [loginFormData, setLoginFormData] = useState({ username: "", password: "" });

  const handleLoginFormData = (data: { username: string; password: string }): void => {
    setLoginFormData(data)
    if (data.username === "admin" && data.password === "admin") {
      setIsLoggedInAdmin(true);
      setIsLoggedIn(false);
    } else if (data.username === "user" && data.password === "user") {
      setIsLoggedIn(true);
      setIsLoggedInAdmin(false);
    } else {
      setIsLoggedIn(false);
      setIsLoggedInAdmin(false);
      alert("Username atau password salah");
    }
  };


  console.log(loginFormData)
  console.log(isLoggedIn, "ini user");
  console.log(isLoggedInAdmin, "ini admin");

  return (
    <>
      <BrowserRouter>

        {isLoggedIn ? (
          <Navigate to="/home" />
        ) : (
          <Routes>
            <Route path="/" element={<Login data={handleLoginFormData} />} />
            <Route path="/Regrister" element={<Regrister />} />
          </Routes>
        )}

        {isLoggedIn && (
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/Detail" element={<Detail />} />
            <Route path="/Voting" element={<Voting />} />
            <Route path="/Info" element={<Info />} />
          </Routes>
        )}


        {isLoggedInAdmin ? (
          <Navigate to="/dasboard" />
        ) : (
          <Routes>
            <Route path="/Regrister" element={<Regrister />} />
          </Routes>
        )}

        {isLoggedInAdmin && (
          <Routes>
            <Route path="/dasboard" element={<Dasboard />} />
            <Route path="/Add_Partai" element={<Add_Partai />} />
            <Route path="/Add_paslon" element={<Add_paslon />} />
            <Route path="/Dasboard" element={<Dasboard />} />
            <Route path="/List_paslon" element={<List_paslon />} />
            <Route path="/List_partai" element={<List_partai />} />
          </Routes>
        )}
      </BrowserRouter>


      {/* ini tampilan */}
      {/* <Home />
      <Detail />
      <Voting />
      <Login />
      <Regrister />
      <Add_Partai />
      <Add_paslon />
      <Dasboard />
      <List_paslon />
      <List_partai />
      <Info /> */}


    </>
  );
};

export default App;
