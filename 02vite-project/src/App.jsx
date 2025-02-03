import { useState } from "react"; //curli braces mai hooks ko likh kr unka use kiya jaa skta h you have to remeber the names of the diffrerent hook and there work
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [
    counter,
    setCounter /*(ye ek function h jiska kuch bhi naam ho skta h jaruri nhi h ki iska naam set se hi start ho )*/,
  ] = useState(15); //useState ek hook h jo ki ek array return krta h jisme 2 value hoti h ek current value or ek usko update krne wala function hota h

  // let counter = 15

  const addvalue = () => {
    if (counter < 20) {
      counter = counter + 1; // may be ider repetative way mai likh de isko lekin jb add value pr click kre ge toh vo +1 hi kr kr k aage badh he gi
      console.log("clicked", counter);
      setCounter(counter);
    }
  };

  const Removevalue = () => {
    if (counter > 0) {
      counter = counter - 1;
      console.log("clicked", counter);
      setCounter(counter);
    }
  };

  return (
    <>
      <h1>abhay singh</h1>
      <h2>counter value: {counter}</h2>

      <button onClick={addvalue}>Add value</button>
      <br />
      <button onClick={Removevalue}>Remove value</button>
    </>
  );
}

export default App;
