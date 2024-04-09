import React, { useState } from "react";
import WeatherApp from "./components/WeatherApp";

import ClearSun from "./assets/clearSun.jpeg";
import Cloud from "./assets/cloud.png";
import Drizzle from "./assets/drizzle.png";
import Humidity from "./assets/humidity.png";
import Rain from "./assets/rain.jpeg";
import Wind from "./assets/wind.png";

const Weather = () => {
  const [icon, setIcon] = useState(Cloud);
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState("Chennai");
  const [country, setCountry] = useState("IN");
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [wind, setWind] = useState(0);
  return (
    <div className=" bg-gray-600 w-[500px] m-auto mt-10 p-7 rounded shadow-lg ">
      <div className="flex border border-b-2 rounded bg-white">
        <input
          type="text"
          placeholder="Search City"
          className=" outline-none p-2 rounded-xl w-full border-none"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          className=" fill-current cursor-pointer mt-2"
        >
          <path
            fill="currentColor"
            d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14"
          />
        </svg>
      </div>
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
      <h6 className="text-center mt-5 text-white text-xs">Designed by Mathiprakash Thirumurugan</h6>
    </div>
  );
};

export default Weather;
