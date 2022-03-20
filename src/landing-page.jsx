import React from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./components/navbar";
function LandingPage() {


  function handleClick(){
    navigate("./showResult")
  }



  const navigate = useNavigate();


  return <div className="wrapper">
    <NavBar />
    <div className="container main-body background-img">
      <div>
        <p className="maintext-1">Safety with</p>
        <p className="maintext-2">SABRE</p>
      </div>
      <div className="section-2">
        <div className="row">
          <div className="col-lg-6">
            <p className="line-1">Get Secured in</p>
            <p className="line-2">One Click</p>
            <p className="line-3">with Sabre</p>
          </div>
          <div className="col-lg-6 row-2">
            <div className="inner-div">
            <p>Get Your</p>
            <p>Safety Score</p>
            <img src={require("./Button-Landing-Page.png")} alt="missing" onClick={handleClick}></img>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="row">
      <div className="col-lg-6">
        <button className="btn btn-success" onClick={()=>navigate('addData')}>Add new Data</button>
      </div>
      <div className="col-lg-6">
        <button className="btn btn-primary" onClick={()=>navigate('showCluster')}>Show Map</button>
      </div>
    </div> */}
    </div>
  </div>
}

export default LandingPage;