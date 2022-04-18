import { DataArray, UpdateDisabledTwoTone } from "@mui/icons-material";
import React from "react";

function History(props) {

    const [data, updateData] = React.useState([]);
    
    function CreateList(element){
        return <tr key={element._id}>
                            <td>{element.latitude}</td>
                            <td>{element.longitude}</td>
                            <td>{String(new Date(element.date))}</td>
                        </tr>
    }
    React.useEffect(() => {
        var requestOptions = {
            method: 'POST',
            redirect: 'follow',
            
        };

        fetch("https://thawing-ridge-27369.herokuapp.com/shistory?latitude=" + props.latitude + "&longitude=" + props.longitude, requestOptions)
            .then(response => response.text())
            .then(result => {
                console.log(JSON.parse(result));
                updateData(JSON.parse(result));
            })
            .catch(error => console.log('error', error));
    }, [])

    return <div>
        <div className="history-wrapper">
            <div className="header">
                <p className="title">History</p>
                {/* <button type="button" className="btn btn-outline-dark" >View All</button> */}
            </div>
            <p>Cases reported last month: {data.length}</p>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Latitude</th>
                        <th scope="col">Longitude</th>
                        <th scope="col">Date</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(CreateList)}
                </tbody>
            </table>
        </div>
    </div>

}

export default History;