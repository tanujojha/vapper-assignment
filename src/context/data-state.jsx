import DataContext from "./data-context";
import { useState } from "react";
import data from "../components/test"

const State = (props) => {

  const [check, setCheck] = useState(false);

  const [cityName, setCityName] = useState("");

  const [currentData, setCurrentData] = useState({});

  const [historicData, setHistoricData] = useState([]);


  const key = process.env.REACT_APP_KEY;

  const currentUrl = "http://api.weatherstack.com/current?access_key=" + key + "&query=" + cityName;

  const hisoricUrl = "http://api.weatherstack.com/historical?access_key=" + key + "&query=" + cityName + "&historical_date=" + "2015-01-21" + "&hourly= 1";

 const currentfunc = async ()=>{
    // event.preventDefault();
    const response = await fetch(currentUrl, {
      method: "GET"
    })
    const json = await response.json()

    setCurrentData(json.current)
    setCheck(true)
    // console.log(json.current);
    // const curntData = json.current;
    // <Current curntdata= {curntData.humidity}/>
    // console.log(curnt);
  }


  const historicfunc = async ()=>{
    // console.log(process.env.REACT_APP_KEY);
    // event.preventDefault();
    const response = await fetch(hisoricUrl, {
      method: "GET"
    });
    const json = await response.json();
    console.log(json)

    var obj = {}
    const arr = Object.values(data.historical);
    // console.log(arr.length);
    for(let i=0; i<arr.length;i++){
      // console.log(arr[i]);
      obj = arr[i];
      // console.log(obj);
    }
    // console.log(obj.hourly[0].humidity);
    const hourly = obj.hourly;
    setHistoricData(hourly)
    // hourly.forEach((hour)=>{
    //   <Historic hour={hour}/>
    // })


  }

  return (
    <DataContext.Provider value={{cityName, setCityName, check, setCheck, currentData, historicData, currentfunc, historicfunc}}>
      {props.children}
    </DataContext.Provider>
  )

}
export default State;
