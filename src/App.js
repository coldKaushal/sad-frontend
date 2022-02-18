import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./landing-page";
import AddData from "./addData";
import ShowClusters from "./show-clusters";



function App() {
  return (<BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage/>} />
      <Route path="/addData" element={<AddData/>} />
      <Route path="/showCluster" element={<ShowClusters/>} />
    </Routes>
    </BrowserRouter>
    )
}

export default App;
