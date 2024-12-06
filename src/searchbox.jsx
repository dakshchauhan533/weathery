import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./searchbox.css"

export default function Searchbox({updateinfo}) {
  const [city, setCity] = useState("");
  const [errorOccurred, setErrorOccurred] = useState(false);


  let keltocel = (kelvin)=>(kelvin-273.15).toFixed(2);

  let url = "https://api.openweathermap.org/data/2.5/weather";
  let key = "6117dec76e8fea982929c6dce71a2d63";

  let apicall = async () => {
    try {
      let res = await fetch(`${url}?q=${city}&appid=${key}`);
      if (!res.ok) {
        seterror(Error);
        throw new Error(`City not found: ${city}`);
      }
      let resp = await res.json();
      console.log(resp);

      
      let result = {
        city: city, 
        temp: keltocel(resp.main.temp)  ,
        maxTemp: keltocel(resp.main.temp_max)  ,
        minTemp: keltocel(resp.main.temp_min)  ,
        feelsLike: keltocel(resp.main.feels_like) ,
        description: resp.weather[0].description
      };

      console.log(result);
     updateinfo(result);
     setErrorOccurred(false);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setErrorOccurred(true);
    }
  };

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(city);
    apicall();
    setCity(""); // Reset the city input
  };

  return (
    <div className="weather">
      <h2>Weather App by Daksh Chauhan</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="Enter your city*"
          variant="outlined"
          value={city} // Bind the value to state
          onChange={handleChange} // Handle change to update state
        />
        <br />
        <br />
        <Button variant="outlined" type="submit">
          Submit
        </Button>
        <br /><br />
        {errorOccurred && <h3>not Found</h3>}
      </form>
    </div>
  );
}
