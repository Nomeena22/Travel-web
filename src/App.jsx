import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {BrowserRouter , Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Nave from './pages/Nave';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Nave />
        <Routes>
          <Route path = "/" element ={<Home/>} ></Route> 
        </Routes>
      </BrowserRouter>
     
    </>
  )
}

export default App
