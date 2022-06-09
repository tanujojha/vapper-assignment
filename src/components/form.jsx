import {useContext} from "react";
import { useNavigate } from "react-router-dom";
import dataContext from "../context/data-context"
import Current from "./current";



function Form(){

  let navigate = useNavigate();

  const context = useContext(dataContext);
  const {cityName, setCityName, currentfunc, historicfunc, check} = context;

  function handelChange(event){
    setCityName(event.target.value)
  }

  function handelCurrent(){
    currentfunc();
  }

  function handelHistoric(){
    historicfunc();
    navigate("/historic")
  }


    return (
    <>
    <div className = "d-flex justify-content-center my-5 mx-3">
      <input className = "w-25" placeHolder = "Enter location name" id="cina" type="text" name="cityname" value = {cityName} onChange = {handelChange}/>
      <button className = "btn btn-outline-secondary mx-3" type="submit" name="crtbutton" onClick = {handelCurrent}>check Current</button>
      <button className = "btn btn-outline-secondary" type="submit" name="crtbutton" onClick = {handelHistoric}>check Historic</button>
    </div>
    {check && <Current/> }
    </>
  )
}

export default Form;
