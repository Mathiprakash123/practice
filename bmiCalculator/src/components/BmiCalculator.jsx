import React, { useState, useEffect } from "react";

const BmiCalculator = () => {
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [weight, setWeight] = useState("");
  const [underweight, setUnderweight] = useState(false);
  const [fit, setFit] = useState(false);
  const [overweight, setOverweight] = useState(false);
  const [heightError, setHeightError] = useState(false);
  const [weightError, setWeightError] = useState(false);

  const handleHeight = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) {
      setHeight(value);
      setHeightError(false); // Reset height error if user enters a valid height
    } else {
      setHeight("");
      alert("Enter a Number");
    }
  };

  const handleWeight = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) {
      setWeight(value);
      setWeightError(false); // Reset weight error if user enters a valid weight
    } else {
      alert("Enter a Number");
      setWeight("");
    }
  };

  const calculateBmi = () => {
    if (height !== "" && weight !== "") {
      let res = (weight / height ** 2) * 10000;
      setBmi(res);
    } else {
      if (height === "") {
        setHeightError(true); // Set height error if height is empty
      }
      if (weight === "") {
        setWeightError(true); // Set weight error if weight is empty
      }
    }
  };

  useEffect(() => {
    if (bmi !== "") {
      setOverweight(false);
      setUnderweight(false);
      setFit(false);
      if (bmi < 18.5) {
        setUnderweight(true);
      } else if (bmi >= 18.5 && bmi <= 24.9) {
        setFit(true);
      } else {
        setOverweight(true);
      }
    }
  }, [bmi]);

  const handleKey = (e) => {
    if (e.key === "Enter") {
      calculateBmi();
    }
  };

  return (
    <div className=" bg-gray-700 text-white m-auto w-[400px] mt-20 rounded shadow p-5 space-y-5">
      <h1 className=" text-center text-2xl font-bold">BMI Calculator</h1>
      <div>
        <label htmlFor="height" className=" block">
          Enter Height
        </label>
        <input
          type="text"
          id="height"
          className=" outline-none border-none p-3 rounded w-full text-black"
          value={height}
          onChange={handleHeight}
          placeholder="Enter Height"
        />
        {heightError && <p className="text-red-400">Please Enter Height</p>}
      </div>
      <div>
        <label htmlFor="weight" className="block">
          Enter Weight
        </label>
        <input
          type="text"
          id="weight"
          value={weight}
          className=" outline-none border-none p-3 rounded w-full text-black"
          onChange={handleWeight}
          placeholder="Enter Weight"
          onKeyDown={handleKey}
        />
        {weightError && <p className="text-red-400">Please Enter Weight</p>}
      </div>
      <button
        className=" bg-[#F1A208] w-full p-3 rounded hover:bg-[#06A77D]"
        onClick={calculateBmi}
      >
        Calculate
      </button>
      <input
        type="text"
        readOnly
        className="w-full p-3 border-none outline-none rounded text-black"
        value={bmi !== "" ? bmi.toFixed(2) : ""}
      />
      {bmi !== "" && (
        <>
          {underweight && (
            <div className=" bg-red-500 p-3 rounded font-medium text-center">
              You are Underweight, Eat Well
            </div>
          )}
          {fit && (
            <div className=" bg-green-500 rounded text-center font-medium p-3 rounded">
              You are Healthy
            </div>
          )}
          {overweight && (
            <div className="bg-red-500 p-3 rounded font-medium text-center">
              You are Overweight, Take Care of Your Health
            </div>
          )}
        </>
      )}{" "}
    </div>
  );
};

export default BmiCalculator;
