import React from "react";
import NavBar from "./components/navbar";
import AddData from "./components/add-data";
import Locate from "./components/locate";
import History from "./components/history";


function Police() {
    const [latitude, updateLatitude] = React.useState(28.6586);
    const [longitude, updateLongitude] = React.useState(77.2124);

    var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };

    function success(pos) {
        var crd = pos.coords;
        updateLatitude(crd.latitude);
        updateLongitude(crd.longitude);
    }

    function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    }
    navigator.geolocation.getCurrentPosition(success, error, options);

    return <div className="police-wrapper">
        <NavBar />
        <div className="container">
            <div className="row content">
                <div className="col-lg-3">
                    <AddData />
                </div>
                <div className="col-lg-8">
                    <Locate latitude={latitude} longitude={longitude} />
                    <History latitude={latitude} longitude={longitude}/>
                </div>
            </div>
        </div>
    </div>
}

export default Police;