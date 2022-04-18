import React from "react";
import NavBar from "./components/navbar";
import BarChart from "./components/barchart";

function ShowResult() {

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

    const [score, updateScore] = React.useState(10);

    React.useEffect(() => {

        var requestOptions = {
            method: 'POST',
            redirect: 'follow'
        };
        navigator.geolocation.getCurrentPosition(success, error, options);
        const date = new Date().getTime();
        fetch("https://thawing-ridge-27369.herokuapp.com/safetyScore?latitude=" + latitude + "&longitude=" + longitude + "&date=" + date, requestOptions)
            .then(response => response.text())
            .then(result => {
                if(result!='error'){
                    console.log(result);
                    if(result!=NaN){
                        updateScore(Number(result));
                    }else{
                        updateScore(10);
                    }
                }
            })
            .catch(error => console.log('error', error));



    }, [])

    return <div className="result-wrapper">
        <NavBar />
        <br />
        <div className="container">
            <div className="result-content">
                <div className="row">
                    <div className="col-lg-6 left">
                        <BarChart />
                    </div>
                    <div className="col-lg-6 right">
                        <div className="outer-circle">
                            <p >{Math.round(score * 10) / 10}</p>
                            <div className="inner-circle">

                            </div>
                        </div>
                        <div className="score-text-wrapper">
                            <p className="score-text">{score<4?"The area is not safe, please try to avoid the area":score<7?"The area is risky, be on you guard while travelling via this route":"The area is safe but still be cautious"}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

}

export default ShowResult;
