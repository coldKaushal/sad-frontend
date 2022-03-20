import * as React from 'react';
import Paper from '@mui/material/Paper';
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';



function BarChart() {
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
    // console.log('Your current position is:');
    // console.log(`Latitude : ${crd.latitude}`);
    // console.log(`Longitude: ${crd.longitude}`);
    // console.log(`More or less ${crd.accuracy} meters.`);
  }
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  
  
  const [chartData, updateData] = React.useState([]);

  React.useEffect(()=>{

    var requestOptions = {
      method: 'POST',
      redirect: 'follow'
    };
    navigator.geolocation.getCurrentPosition(success, error, options);
    const date = new Date().getTime();
    fetch("http://localhost:4000/checkSafety?latitude="+latitude+"&longitude="+longitude+"&date="+date, requestOptions)
      .then(response => response.text())
      .then(result => {
        console.log(result);
        updateData(JSON.parse(result));
      })
      .catch(error => console.log('error', error));


      
  }, [])



  


    return (
      <Paper>
        <Chart
          data={chartData}
          rotated
        >
          <ArgumentAxis />
          <ValueAxis />
          <BarSeries
            valueField="cases"
            argumentField="Date"
            color="green"
          />
          <Title text="Assault Cases reported Last Month" />
          <Animation />
        </Chart>
      </Paper>
    );
}

export default BarChart;
