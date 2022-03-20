import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./landing-page";
import AddData from "./addData";
import Police from "./police";
import ShowResult from "./result";


function App() {
  return (<BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage/>} />
      <Route path="/addData" element={<AddData/>} />
      <Route path="/police" element={<Police/>} />
      <Route path="/showResult" element={<ShowResult/>} />
    </Routes>
    </BrowserRouter>
    )
}

export default App;
