import React from "react";

function Locate(props) {
    const [display, updateDisplay] = React.useState({display: "none"});
    const [latitude, updateLatitude] = React.useState(props.latitude);
    const [longitude, updateLongitude] = React.useState(props.longitude);



    const [count, updateCount] = React.useState(5);
    function handleMinus() {
        updateCount(Math.max(1, count - 1));
    }
    function handlePlus() {
        updateCount(Math.min(10, count + 1));
    }
    const [locations, updateLocations] = React.useState([]);
    function handleClick() {
        
        var requestOptions = {
            method: 'POST',
            redirect: 'follow'
        };

        fetch("https://thawing-ridge-27369.herokuapp.com/centers?latitude=" + latitude + "&longitude=" + longitude + "&centers=" + count, requestOptions)
            .then(response => response.text())
            .then(result => {
                if (result != 'error' && result != 'no') {
                    updateLocations(JSON.parse(result));
                    updateDisplay({});
                }
            })
            .catch(error => console.log('error', error));
    }

    function createList(items) {
        function redirect(){
            window.open("http://maps.google.com/maps?z=12&t=m&q=loc:"+items[0]+"+"+items[1], "_blank");
        }
        return <div className="row" key={items[0]}>
        <div className="col-lg-4">
            <button type="button" class="btn btn-light" disabled>{items[0]}</button>
        </div>
        <div className="col-lg-4">
            <button type="button" class="btn btn-light" disabled>{items[1]}</button>
        </div>
        <div className="col-lg-4">
            <button type="button" class="btn btn-outline-danger" onClick={redirect}>See on Map</button>
        </div>
    </div>
    }


    return <div>
        <div className="locate-wrapper">
            <p className="title">Locate Vulnerable Centers</p>
            <div className="locate-options">
                <p>Centers to Locate</p>
                <div className="btns">
                    <button type="button" className="btn btn-outline-dark rounded-circle" onClick={handleMinus}>-</button>
                    <button type="button" className="btn btn-outline-secondary btns-text" disabled>{count}</button>
                    <button type="button" className="btn btn-outline-dark rounded-circle" onClick={handlePlus}>+</button>
                </div>
                <button type="button" className="btn btn-outline-success" onClick={handleClick}>Locate</button>
                <div className="note">
                    <p>Using the last month data the algorithm will find centers around which maximum cases were reported.</p>
                </div>
                <div style={display}>
                    <h4>Centers List</h4>
                    {locations.map(createList)}
                </div>
            </div>

        </div>
    </div>

}

export default Locate;