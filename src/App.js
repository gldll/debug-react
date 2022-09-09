import logo from "./logo.svg";
import "./App.css";
import { useState, useTransition, useEffect } from "react";
function App() {
  const [a, setA] = useState(1);

  // const [isPending, startTransition] = useTransition();

  return (
    <div className="App">
      <div>{a}</div>
      <button onClick={()=>{setA((data) => data + 1)}}>加一个</button>
    </div>
  );
}

export default App;
// useEffect(()=>{
//   setTimeout(()=>{
//     startTransition(()=>{
//       setA(new Array(10000).fill('123'))
//     })

//   },0)
// },[])
