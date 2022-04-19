import React from "react";


function AddData(){
    const [lat, ulat] = React.useState(27.858);
    const [long, ulong] = React.useState(77.585);
    const [date, udate] = React.useState("2015-03-25T22:08");
    const [successP, uSuccess] = React.useState({display: "none"});
    function handleClick(){
        const newDate = new Date(date).getTime();
        var requestOptions = {
            method: 'POST',
            redirect: 'follow'
          };
          
          fetch("https://glacial-mountain-69918.herokuapp.com/enterData?latitude="+lat+"&longitude="+long+"&date="+newDate, requestOptions)
            .then(response => response.text())
            .then(result => {
                if(result!='error'){
                        uSuccess({});
                }
            })
            .catch(error => console.log('error', error));
        
    }
    return <div>
        <div className="add-data">
                        <p>Add New Entry</p>
                        <form>
                            <div className="form-group">
                                <label htmlFor="latitude">Latitude</label>
                                <input type="text" className="form-control" id="latitude" placeholder="28.6555" onChange={e=>ulat(e.target.value)} value={lat} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="longitude">Longitude</label>
                                <input type="text" className="form-control" id="longitude" placeholder="77.8588" onChange={e=>ulong(e.target.value)} value={long} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="date-time">Date & Time</label>
                                <input type="datetime-local" className="form-control" id="date-time" placeholder="" onChange={e=>udate(e.target.value)} value={date} />
                            </div>

                        </form>
                        <p style={successP} className="success-text">Data entered successfully</p>
                        <button type="button" className="btn btn-outline-success" onClick={handleClick}>Add Data</button>

                    </div>
    </div>
}

export default AddData;