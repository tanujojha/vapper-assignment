
function Historic(props){

  return(
    <div className = "d-flex justify-content-center my-5 mx-5">
      <ul className = "list-group">
        <li className = "list-group-item ">Time: {props.hour.time}</li>
        <li className = "list-group-item ">Temperature: {props.hour.temperature}</li>
        <li className = "list-group-item ">Pressure: {props.hour.pressure}</li>
        <li className = "list-group-item ">Windgust: {props.hour.windgust}</li>
        <li className = "list-group-item ">Humidity: {props.hour.humidity}</li>
      </ul>
    </div>
  )
}

export default Historic;
