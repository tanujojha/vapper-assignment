// import 'dotenv/config'
// require('dotenv').config();
import {useState, useEffect} from "react";
import Current from "./current";
import Historic from "./historic";
import data from "./test"

function Form(){

  const [cityName, setCityName] = useState("");

  const key = process.env.REACT_APP_KEY;

  const currentUrl = "http://api.weatherstack.com/current?access_key=" + key + "&query=" + cityName;

  const hisoricUrl = "http://api.weatherstack.com/historical?access_key=" + key + "&query=" + cityName + "&historical_date=" + "2015-01-21" + "&hourly= 1";

  function handelChange(event){
    setCityName(event.target.value)
  }

  async function Current(event){
    // event.preventDefault();
    const response = await fetch(currentUrl, {
      method: "GET"
    })
    const json = await response.json()
    // console.log(json.current);
    const curnt = json.current;
    <Current curntdata= {json.current.humidity}/>
    console.log(curnt);
  }


  async function Historic(event){
    console.log(process.env.REACT_APP_KEY);
    event.preventDefault();
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
    hourly.forEach((hour)=>{
      <Historic hour={hour}/>
    })


  }


    return (

    <div>
      <label htmlFor="cina">city name </label>
      <input id="cina" type="text" name="cityname" value = {cityName} onChange = {handelChange}/>
      <button type="submit" name="crtbutton" onClick = {Current}>check Current</button>
      <button type="submit" name="crtbutton" onClick = {Historic}>check Historic</button>
    </div>
  )
}

export default Form;
