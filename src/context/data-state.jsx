import DataContext from "./data-context";
import { useState } from "react";


const State = (props) => {

  const [check, setCheck] = useState(false);

  const [cityName, setCityName] = useState("");

  const [currentData, setCurrentData] = useState({});

  const [historicData, setHistoricData] = useState([]);


  const key = process.env.REACT_APP_KEY;

  const currentUrl = "http://api.weatherstack.com/current?access_key=" + key + "&query=" + cityName;

  const hisoricUrl = "http://api.weatherstack.com/historical?access_key=" + key + "&query=" + cityName + "&historical_date=" + "2015-01-21" + "&hourly= 1";

 const currentfunc = async ()=>{
    
    const response = await fetch(currentUrl, {
      method: "GET"
    })
    const json = await response.json()

    setCurrentData(json.current)
    setCheck(true)

  }


  const historicfunc = async ()=>{

    const response = await fetch(hisoricUrl, {
      method: "GET"
    });
    const json = await response.json();
    console.log(json)

    var obj = {}
    const arr = Object.values(json.historical);

    for(let i=0; i<arr.length;i++){
      obj = arr[i];
    }
    const hourly = obj.hourly;
    setHistoricData(hourly)

  }

  return (
    <DataContext.Provider value={{cityName, setCityName, check, setCheck, currentData, historicData, currentfunc, historicfunc}}>
      {props.children}
    </DataContext.Provider>
  )

}
export default State;
