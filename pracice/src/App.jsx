import { React } from "react";
import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);

  const increment=()=>
  {
    setCount(count+1);

  }
  const decrement=()=>
  {
    setCount(count-1);
    if(count<=0)
    {
      setCount(0);
    }

  }
  const reset =()=>{
    setCount(0)
  }


  return <>
  <div className=" bg-black rounded w-[400px] h-[400px] text-center text-white m-auto mt-32 space-y-8">
    <h1 className=" text-3xl p-5">Conter : {count}</h1>
    <button onClick={increment} className=" bg-green-500 p-4 px-7 rounded shadow-lg hover:bg-green-600 w-[90%] text-2xl ">+</button>
    <button onClick={decrement} className=" bg-red-500 p-4 px-7 rounded shadow-lg hover:bg-red-600 w-[90%] text-2xl">-</button>
    <button onClick={reset} className="bg-white text-black p-3 px-7 rounded hover:bg-gray-200">Reset</button>
  </div>
  
  </>;
}

export default App;
