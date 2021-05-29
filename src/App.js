import Home from './components/Home';
import Parent from './components/Parent';
import React from 'react'
function App(){
  const numbers=[2 , 3 , 8 , 3 , 4, 7, 2 ,10]
  return (
    <>
     {/* <Home numbers={numbers} /> */} 
     <Parent />    
    </>
  );
}

export default App;
