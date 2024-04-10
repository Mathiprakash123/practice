import React, { useState } from "react";

const PasswordGenerator = () => {
  const [length,setLength] = useState(8);
  const [isUpper,setIsUpper] = useState(true);
  const [isLower,setIsLower] = useState(true);
  const [isNumber,setIsNumber] = useState(true);
  const [isSymbol,setSymbol] = useState(true);
  const [password,setPassword] = useState("");

  const handleLengthChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) {
      setLength(value);
    }
    else{
      setLength("");
    }
  };
  const copyToClipboard=()=>{
    navigator.clipboard.writeText(password);
    alert("copied");

  }

  const generatePass=()=>{
    let charset = "";

    
      if(isUpper) charset += "QWERTYUIOPLKJHGFDSAZXCVBNM";
      if(isLower) charset += "qwertyuioplkjhgfdsazxcvbnm";
    if(isNumber) charset+= "1234567890";
     if(isSymbol) charset+= "!@#$%^&*?";
     let generatedPass="";
    

     for(let i=0;i<length;i++)
     {
       let index = Math.floor(Math.random()*charset.length);

       generatedPass+=charset[index];
     }
     setPassword(generatedPass);

  }


  return (
    <div className=" bg-green-700 text-white w-[400px] m-auto mt-20 p-6 rounded shadow-lg space-y-4">
      <h1 className="text-center text-2xl font-semibold">
        Strong Password Generator
      </h1>
      <input
        type="text"
        value={length}
        className="w-full p-2 rounded outline-none border-none text-black"
        onChange={handleLengthChange}
      />

      <div className="space-y-5 text-xl">
        <div className=" space-x-3 ">
          <input type="checkbox" name="" id="upper" checked={isUpper} onChange={(e)=>setIsUpper(e.target.checked)}/>
          <label htmlFor="upper">Include Upper Case</label>
        </div>
        <div className=" space-x-3 ">
          <input type="checkbox" name="" id="lower" checked={isLower} onChange={(e)=>setIsLower(e.target.checked)}/>
          <label htmlFor="lower">Include Lower Case</label>
        </div>
        <div className=" space-x-3 ">
          <input type="checkbox" name="" id="numbers" checked={isNumber} onChange={(e)=>setIsNumber(e.target.checked)}/>
          <label htmlFor="numbers">Include Numbers</label>
        </div>
        <div className=" space-x-3 ">
          <input type="checkbox" name="" id="symbols" checked={isSymbol} onChange={(e)=>setSymbol(e.target.checked)}/>
          <label htmlFor="symbols">Include Symbols</label>
        </div>
      </div>
      <button className=" bg-blue-600 p-3 rounded w-full shadow-sm hover:bg-blue-700" onClick={generatePass}>
        Generate Password
      </button>
      <div className="flex">
        <input
          type="text"
          readOnly
          value={password}
          className="w-full text-black p-3 border-none outline-none"
        />
        <button className="p-3 bg-blue-600 rounded hover:bg-blue-700" onClick={copyToClipboard}>
          copy
        </button>
      </div>
    </div>
  );
};

export default PasswordGenerator;
