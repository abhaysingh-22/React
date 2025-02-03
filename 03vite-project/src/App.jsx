import { useState } from 'react';
import './App.css';
import Card from './components/card';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='bg-red-800 text-black p-4 rounded-full mb-4'>abhay singh</h1>
    <Card username={"raistar"} />
    <Card username={"gyansujan"} />
    </>
  )
}

export default App


// props cheezo ko reusable bnata h 