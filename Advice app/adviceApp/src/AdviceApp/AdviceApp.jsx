import React, { useState } from "react";


const AdviceApp = () => {
    const [advice,setAdvice]= useState("Please click the button to get an advice");
   const [count,setCount]= useState(0);
    async function getAdvice(){
        const res = await fetch("https://api.adviceslip.com/advice");
        const data = await res.json();
        setAdvice(data.slip.advice);
        setCount((c)=>c+1);
    }
    return (
    <div className=" m-auto bg-gray-600 text-white w-[450px] p-5 mt-32 space-y-10 text-center rounded shadow-lg ">
      <h1 className="text-2xl font-semibold">Do You Want an Advice</h1>
      <hr />

      <h3 className="text-xl">{advice}</h3>

      <button className=" bg-blue-600 text-white p-3 rounded w-full hover:bg-blue-700" onClick={getAdvice}>Click</button>
        <h4 className="font-semibold">Count : {count}</h4>

        <h5 className="text-xs" >Designed by Mathiprakash Thirumurugan</h5>
    </div>
  );
};

export default AdviceApp;
