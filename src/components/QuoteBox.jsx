import React from 'react';
import quotes from '../quotes.json'
import { useState } from 'react';

const QuoteBox = () => {

  const [index, setIndex]= useState(0)

  const ramdomIndexQuote=Math.floor(Math.random()*quotes.length)

  const ramdom= () => {
    setIndex (Math.floor(Math.random() * quotes.length))
 
   }

   let colors=[]
if (colors.length < Infinity) {
        let color = Math.floor(Math.random()* 500)+100;
    colors.push(`#${color}`);
}

document.body.style.backgroundColor= colors[0]
 
return (
    <div className='box'>
      <i style={{color:`${colors[0]}`}} className="fa-solid fa-quote-left"></i>
      <div className='quote'>
        <h3 style={{color:`${colors[0]}`}}>{quotes[ramdomIndexQuote].quote}</h3>
        <div>
        <h2 style={{color:`${colors[0]}`}}>{quotes[ramdomIndexQuote].author}</h2>
        </div>
      </div>
     
        
      
      <button style={{color:`${colors[0]}`}} onClick={ramdom}>
      <i className="fa-solid fa-shuffle"></i>
      </button>
    </div>
  );
};

export default QuoteBox;