import { useState } from "react"
import Infobox from "./infobox.jsx"
import Searchbox from "./searchbox.jsx"
export default  function weatherapp(){
  let [weatherinfo,setweatherinfo]=useState({
    city:"your input",
    temp:"00.0",
    maxTemp:"00.0",
    minTemp:"00.0",
    feelsLike:"00.0",
    description:"your input weather"
  })

  let updateinfo = (data)=>{
    setweatherinfo(data);
  }
    return(
       <div>
        <Searchbox updateinfo = {updateinfo} />
        <Infobox  info = {weatherinfo}/>
       </div>
        
      
       
    )
}