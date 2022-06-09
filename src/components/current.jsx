import {useContext} from "react";
import dataContext from "../context/data-context"

function Current(props){
  
  const context = useContext(dataContext);
  const {currentData} = context;


  return(
    <div className = "d-flex justify-content-center">
      <ul className = "list-group">
        <li className = "list-group-item ">Time: {currentData.observation_time}</li>
        <li className = "list-group-item ">Temperature: {currentData.temperature}</li>
        <li className = "list-group-item ">Wind Degree: {currentData.wind_degree}</li>
        <li className = "list-group-item ">Pressure: {currentData.pressure}</li>
        <li className = "list-group-item ">Humidity: {currentData.humidity}</li>
      </ul>
    </div>
  )
}

export default Current;
