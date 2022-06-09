import Historic from "../components/historic"
import {useContext} from "react";
import dataContext from "../context/data-context"

function Historicpage(){

  const context = useContext(dataContext);
  const {historicData} = context;

  return (
    <>
      {historicData.forEach((hour)=>{
        <Historic hour={hour}/>
      })}
    </>
  )
}

export default Historicpage;
