import React from "react";

function AddData(){
    const [message, updateMessage]= React.useState("");
    const [date, updateDate] = React.useState("");
  const [data, updateData] = React.useState({latitude: "",
longitude: "",
date: ""});
  function handleChange(event){
    const name = event.target.name;
    const value = name=='date'?event.target.valueAsNumber:event.target.value;
    const nvalue = event.target.value;
    if(name=='date'){
        updateDate(nvalue);
    }
    updateData(prevValue=>{
      return {
        ...prevValue,
        [name]: value
      }
      
    })
    console.log(data.date);
    console.log(data);
  }


  function submitForm(event){
    var requestOptions = {
      method: 'POST',
      redirect: 'follow'
    };
    
    fetch("http://localhost:4000/enterData?latitude="+data.latitude+"&longitude="+data.longitude+"&date="+data.date, requestOptions)
      .then(response => response.text())
      .then(result => updateMessage(result))
      .catch(error => console.log('error', error));

    event.preventDefault();
  }

  return (
      
    <div className="container enter-data">
    <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Add New Data</h1>
    <p class="lead">Please fill the latitude, longitude and the date in DDMMYYYY format and submit to add the new data</p>
  </div>
</div>
      <div className="row">
        <form >
          <div className="form-group" >
            <label htmlFor="exampleInputEmail1">Latitude</label>
            <input required value={data.latitude} onChange={handleChange} name="latitude" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="latitude" />

          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Longitude</label>
            <input required value={data.longitude} onChange={handleChange} name="longitude" type="text" className="form-control" id="exampleInputPassword1" placeholder="Longitude" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Date</label>
            <input required value={date} onChange={handleChange} name="date" type="date" className="form-control" id="exampleInputPassword1" placeholder="Date" />
          </div>
         
          <button type="submit" onClick={submitForm} className="btn btn-success">Submit</button>
          <p>{message}</p>
        </form>
      </div>
    </div>

  );
}

export default AddData;