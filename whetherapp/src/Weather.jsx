import React, { useEffect, useState } from "react";
import WeatherApp from "./components/WeatherApp";

import ClearSun from "./assets/clearSun.jpeg";
import Cloud from "./assets/cloud.png";
import Drizzle from "./assets/drizzle.png";
import Humidity from "./assets/humidity.png";
import Rain from "./assets/rain.jpeg";
import Wind from "./assets/wind.png";
const key = "367508d95efd264e059b4e86ea817ade";

const Weather = () => {
  const [text, setText] = useState("Chennai");
  const [icon, setIcon] = useState(ClearSun);
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [wind, setWind] = useState(0);
  const [loading, setLoading] = useState(false);
  const [cityNotFound, setcityNotFound] = useState(false);
  const [error, setError] = useState(null);

  // Image for weather

  const weatherIconMap = {
    "01d": ClearSun,
    "01n": ClearSun,
    "02d": Cloud,
    "02n": Cloud,
    "03d": Drizzle,
    "03n": Drizzle,
    "04d": Drizzle,
    "04n": Drizzle,
    "09d": Rain,
    "09n": Rain,
    "10d": Rain,
    "10n": Rain,
    "13d": Humidity,
    "13n": Humidity,
  };

  // end
  const search = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${key}&units=Metric`;

    try {
      setLoading(true);
      let res = await fetch(url);
      let data = await res.json();
      console.log(data);

      if (data.cod === "404") {
        console.log("City not found");
        setcityNotFound(true);
        setLoading(false);
        return;
      }
      setHumidity(data.main.humidity);
      setWind(data.wind.speed);
      setTemp(Math.floor(data.main.temp));
      setCity(data.name);
      setCountry(data.sys.country);
      setLat(data.coord.lat);
      setLon(data.coord.lon);
      setIcon(weatherIconMap[weatherIconCode] || ClearSun);
      console.log(weatherIconCode);
      setcityNotFound(false);
      error("");
    } catch (error) {
      setError("An error Occured While fetching data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(function () {
    search();
  }, []);

  const handleCity = (e) => {
    setText(e.target.value);
    console.log(text);
  };
  const handleKey = (e) => {
    if (e.key === "Enter") {
      search();
    }
  };

  return (
    <div className=" bg-gray-600 w-[500px] m-auto mt-10 p-7 rounded shadow-lg ">
      <div className="flex border border-b-2 rounded bg-white">
        <input
          type="text"
          placeholder="Search City"
          className=" outline-none p-2 rounded-xl w-full border-none"
          onChange={handleCity}
          value={text}
          onKeyDown={handleKey}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          className=" fill-current cursor-pointer mt-2"
          onClick={() => {
            search();
          }}
        >
          <path
            fill="currentColor"
            d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14"
          />
        </svg>
      </div>

      {loading && <div className="text-white text-3xl text-center mt-10">loading....</div>}
      {cityNotFound && <div className="text-white text-3xl text-center mt-10">City Not Found ,Please Check Your City Name</div>}
      {!loading && !cityNotFound && (
        <WeatherApp
          icon={icon}
          temp={temp}
          city={city}
          country={country}
          lat={lat}
          lon={lon}
          humidity={humidity}
          wind={wind}
        />
      )}
      <h6 className="text-center mt-5 text-white text-xs">
        Designed by Mathiprakash Thirumurugan
      </h6>
    </div>
  );
};

export default Weather;
