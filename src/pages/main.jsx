import Form from ".././components/form";
import Historicpage from "./historicPage";
import State from ".././context/data-state";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function Main(){
  return (
    <State>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form />}/>
          <Route path="/historic" element={<Historicpage />}/>
        </Routes>
      </BrowserRouter>
    </State>
  )
}

export default Main;
