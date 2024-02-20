import React, { useState } from 'react'
import './App.css'
import { UC ,LC,NC,SC } from './password';

export default function App() {

let[uppercase, setUppercase] = useState(false);
let[lowercase, setLowercase] = useState(false);
let[numbers, setNumbers] = useState(false);
let[symbols, setSymbols] = useState(false);

let [passlen, setPasslen] = useState(10);
let [finalpass, setFinalpass] = useState("");



const handleGeneratePassword = () => {
    let charset = '';
    let finalpass = "";
    if (uppercase || lowercase || numbers || symbols) {
      if (uppercase) charset += UC;
      if (lowercase) charset += LC;
      if (numbers) charset += NC;
      if (symbols) charset += SC;
      
for(let i=0 ; i<passlen ; i++) {

    finalpass += charset.charAt(Math.floor(Math.random()*charset.length));
}
setFinalpass(finalpass)

    } else {
      alert('Please select at least one checkbox');

    }
  };

let copyPass = ()=> navigator.clipboard.writeText(finalpass)


    return (

        <>

            <div className='passwordGenerator'>
                <h3>Password Generater</h3>
                <div className='inputDiv'>
                    <input type='text' readOnly value={finalpass}/> <button onClick={copyPass}>Copy</button>
                </div>

                <div className='pass-option'>
                    <span>Password length</span> <input value={passlen} onChange={(event)=>setPasslen(event.target.value)} type='number' min={10} max={20}/>

                    </div>
               
                <div className='pass-option'>
                    <span>Include upercase letters</span> <input type='checkbox' onChange={()=>{setUppercase(!uppercase)}} checked={uppercase} />
                </div>


                <div className='pass-option'>
                    <span>Include lowercase letters</span> <input type='checkbox' onChange={()=>{setLowercase(!lowercase)}} checked={lowercase}/>
                </div>

                <div className='pass-option'>
                    <span>Include numbers</span> <input type='checkbox' onChange={()=>{setNumbers(!numbers)}} checked={numbers}/>
                </div>

                <div className='pass-option'>
                    <span>Include symbols</span> <input type='checkbox' onChange={()=>{setSymbols(!symbols)}} checked = {symbols}/>
                </div>

         <button className='btnn' onClick={handleGeneratePassword}>Generate Password</button>

            </div>



        </>

    )
}
