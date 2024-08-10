import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {BrowserRouter , Routes, Route} from "react-router-dom";
import Home from './pages/Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element ={<Home/>} ></Route> 
        </Routes>
      </BrowserRouter>
      {/* <Home/> */}
      {/* <div className='relative h-screen bg-red-700 bg-cover bg-center' >
            <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center' >
                <h1 className='bg-red-600 rounded-md '>Explore the World with Us</h1>
                <p>Discover Amazing places at exclusive deals</p>
            </div>
        </div> */}
    </>
  )
}

export default App
