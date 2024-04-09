import React from "react";

const WeatherApp = (props) => {
  return (
    <div className=" text-center justify-center text-white space-y-10">
      <img src={props.icon} alt="no-image" className="m-3 ml-28 rounded" />
      <div className="flex space-x-2 ml-52 my-10">
        <h1 className=" text-xl text-white ">{props.temp}</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 14 14"
          className="fill-current text-xl text-white pt-1"
        >
          <g
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="2" cy="2" r="1.5" />
            <path d="M13.5 1.84a6 6 0 1 0-2 11.66a6 6 0 0 0 2-.34" />
          </g>
        </svg>
      </div>
      <div>
        <h1 className=" text-2xl text-green-300">{props.city}</h1>
        <h2>{props.country}</h2>
      </div>
      <div className=" flex ml-40 space-x-4">
        <section>
          <h1>Latitude</h1>
          <h3>{props.lat}</h3>
        </section>
        <section>
          <h1>Latitude</h1>
          <h3>{props.lon}</h3>
        </section>
      </div>

      <div className="flex justify-between">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            className=" fill-current ml-3"
          >
            <path
              fill="currentColor"
              d="M21.98 14H22zM5.35 13c1.19 0 1.42 1 3.33 1c1.95 0 2.09-1 3.33-1c1.19 0 1.42 1 3.33 1c1.95 0 2.09-1 3.33-1c1.19 0 1.4.98 3.31 1v-2c-1.19 0-1.42-1-3.33-1c-1.95 0-2.09 1-3.33 1c-1.19 0-1.42-1-3.33-1c-1.95 0-2.09 1-3.33 1c-1.19 0-1.42-1-3.33-1c-1.95 0-2.09 1-3.33 1v2c1.9 0 2.17-1 3.35-1m13.32 2c-1.95 0-2.09 1-3.33 1c-1.19 0-1.42-1-3.33-1c-1.95 0-2.1 1-3.34 1c-1.24 0-1.38-1-3.33-1c-1.95 0-2.1 1-3.34 1v2c1.95 0 2.11-1 3.34-1c1.24 0 1.38 1 3.33 1c1.95 0 2.1-1 3.34-1c1.19 0 1.42 1 3.33 1c1.94 0 2.09-1 3.33-1c1.19 0 1.42 1 3.33 1v-2c-1.24 0-1.38-1-3.33-1M5.35 9c1.19 0 1.42 1 3.33 1c1.95 0 2.09-1 3.33-1c1.19 0 1.42 1 3.33 1c1.95 0 2.09-1 3.33-1c1.19 0 1.4.98 3.31 1V8c-1.19 0-1.42-1-3.33-1c-1.95 0-2.09 1-3.33 1c-1.19 0-1.42-1-3.33-1c-1.95 0-2.09 1-3.33 1c-1.19 0-1.42-1-3.33-1C3.38 7 3.24 8 2 8v2c1.9 0 2.17-1 3.35-1"
            />
          </svg>
          <h1>{props.humidity}%</h1>
          <h3>Humidity</h3>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            className=" fill-current ml-7"
          >
            <path
              fill="currentColor"
              d="M10 23v-2h2v-5.2q-.3-.125-.562-.288t-.488-.362L8.05 17L1 15v-4h9.8q.25-.275.55-.475T12 10.2V5.9L17.325.925l3.4 2.125l-5.125 8.475q.175.3.263.65t.112.725l3.525.85l3.55 6.35l-2.825 2.825l-6.225-6.2V21h2v2zM4 5V3h6v2zm10 1.775V10.2q.025 0 .038.013t.037.012l3.95-6.55l-.45-.25zM1 9V7h5v2zm12 5q.425 0 .713-.288T14 13t-.288-.712T13 12t-.712.288T12 13t.288.713T13 14m-5.275.85l2.325-1.4q-.025-.125-.025-.225V13H3v.5zm10.475.625l-2.85-.65q-.05.05-.1.125t-.1.125l5.075 5.05l.375-.375zM3 21v-2h5v2zm12.15-5.925"
            />
          </svg>
          <h1>{props.wind} km/h</h1>
          <h3>Wind Speed</h3>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
