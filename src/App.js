import React from "react";
import "./Assets/css/nucleo-icons.css"
import "./Assets/css/nucleo-svg.css"
import "./Assets/css/soft-ui-dashboard.css"
import "./Assets/css/soft-ui-dashboard.css.map"
import "./Assets/css/soft-ui-dashboard.min.css"
import Routing from "./Routes/Routing";
import { useNavigate } from "react-router-dom";



const App = () => {
  const navigate = useNavigate()
  return <>
    <button onClick={() => navigate("/dashboard")} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>Go to dashboard</button>
    <Routing />
  </>

};

export default App;