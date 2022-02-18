import React from "react";
import {useNavigate} from "react-router-dom";

function LandingPage(){

    const navigate = useNavigate();


    return <div className="container main-body">
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">SAD</h1>
        <p class="lead">This web application is for police. 
        To add a new case click on "Add new Data" button, 
        to see the recent cases on the map click on "Show Map" button</p>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-6">
        <button className="btn btn-success" onClick={()=>navigate('addData')}>Add new Data</button>
      </div>
      <div className="col-lg-6">
        <button className="btn btn-primary" onClick={()=>navigate('showCluster')}>Show Map</button>
      </div>
    </div>
  </div>
}

export default LandingPage;