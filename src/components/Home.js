import React from 'react'
import '../App.css'
export default function Home(props){
  return (
    <div className="App">
      {
        props.numbers.map(number => <ul>{Array(number).fill(<li>*</li>)}</ul>)
      }
    </div>
  )
}
