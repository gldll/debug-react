import logo from "./logo.svg";
import "./App.css";
import { useState, useTransition, useEffect } from "react";

function App() {
  const [a, setA] = useState([]);

  const [b, setB] = useState(1);

  const [c, setC] = useState(1);
  const [isPending, startTransition] = useTransition();

 useEffect(()=>{
  setTimeout(() => {
   
 
    // startTransition(()=>{

    //   setA(new Array(200000).fill('123'))
    //   console.log("一已已")

    // })

   

   }, 0);
 },[])

const addB= ()=>
{
  
  setB((data) => data + 1)
    console.log("一已")

   
   setC((data) => data + 1)
   console.log("一已已已已")

}

  return (
    <div className="App">
         <div>{b}</div>
         <div>{c}</div>
        <button onClick={addB}>加一个</button>
     {a.map(item=>(<div>{item}</div>))} 
    </div>
  );
}

export default App;

