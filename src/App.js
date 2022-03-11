import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const[item, setitem] = useState(["rock","paper", "knife"])
  const [playerone,setplayerone] = useState("")
  const [playertwo,setplayertwo] = useState("")
  const [win,setwin] = useState("")
  console.log(playerone)
  console.log(playertwo)
  
  const rand = function(){
      setplayerone(item[Math.floor(Math.random()*item.length)])
      
  }
  const randtwo = function(){
    setplayertwo(item[Math.floor(Math.random()*item.length)])

    
     
}

const reset= function(){
  setplayerone("")
  setplayertwo("")
}

useEffect(function(){
  for(let i = 0; i<1;i++){
    if(playerone == "rock"&&playertwo == "knife"|| 
       playerone == "knife"&&playertwo == "paper"||
       playerone == "paper"&&playertwo == "rock"
       ){
        setwin("WIN PLAYER 1")
    }

    if(playertwo == "rock"&&playerone == "knife"|| 
    playertwo == "knife"&&playerone == "paper"||
    playertwo == "paper"&&playerone == "rock"){
      setwin("WIN PLAYER 2")
    }

    if(playerone == playertwo){
      setwin("DRAW")
    }
  }
},[playertwo])
  return (
    <div className="App">
      <button onClick={rand} className="btn1">Player 1 </button>
      <div className='res1'>{playerone}</div>
      <button onClick={randtwo} className="btn2">Player 2</button>
      <div className='res2'>{playertwo}</div>
      <h1 className={win=="WIN PLAYER 1"?"result2":win=="WIN PLAYER 2"?"result3":"result"}>{playerone&&playertwo!==""? win:""}</h1>
      <button onClick={reset} className={playerone&&playertwo!==""?"reset":"resethide"}>reset</button>
    </div>
  );
}

export default App;
