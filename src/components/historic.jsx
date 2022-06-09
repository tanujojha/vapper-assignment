function Historic(props){
  return(
    <ul>
      <li>{props.hour.time}</li>
      <li>{props.hour.temperature}</li>
      <li>{props.hour.pressure}</li>
      <li>{props.hour.windgust}</li>
      <li>{props.hour.humidity}</li>

    </ul>
  )
}

export default Historic;
