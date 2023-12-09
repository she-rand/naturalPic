import { useState } from 'react'

import './App.css'
import MyContextProvider from './context/MyContext'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './views/Home'
import Favorites from './views/Favorites'
const PHOTO_URL = "/photos.json";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <MyContextProvider>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path="/favorites" element={<Favorites/>} ></Route>
      </Routes>
    
     </MyContextProvider>
    </>
  )
}

export default App
