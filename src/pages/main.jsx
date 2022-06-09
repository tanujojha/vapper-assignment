import Form from ".././components/form";
import Current from ".././components/current";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function Main(){
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Form />}/>
      
    </Routes>
  </BrowserRouter>
  )
}

export default Main;
