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
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {


  return (
    <>
      {/* <Home />
      <Detail />
      <Voting />
      <Login />
      <Regrister />
      <Add_Partai />
      <Add_paslon />
      <Dasboard />
      <List_paslon />
      <List_partai /> */}
      {/* <Info /> */}
      <BrowserRouter>
        <Routes>
          <Route >
            <Route path="/Home" element={<Home />} />
            <Route path="/Detail" element={<Detail />} />
            <Route path="/Voting" element={<Voting />} />
            <Route path="/Info" element={<Info />} />

            <Route path="/Login" element={<Login />} />
            <Route path="/" element={<Login />} />
            <Route path="/Regrister" element={<Regrister />} />

            <Route path="/Add_Partai" element={<Add_Partai />} />
            <Route path="/Add_paslon" element={<Add_paslon />} />
            <Route path="/Dasboard" element={<Dasboard />} />
            <Route path="/List_paslon" element={<List_paslon />} />
            <Route path="/List_partai" element={<List_partai />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
