import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Profile from "./Pages/MyProfile"
import TaskCreate from "./Pages/TaskCreate"
import BasicText from './BasicText'
import TaskCard from './TaskCard'
import { useState } from "react";

function App() {

  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <BrowserRouter>
      <nav className="flex justify-between items-center">
        <h1>ToDoAble</h1>

        <button onClick ={() => setIsOpen (!isOpen)}>
          {isOpen ? "✖" : "☰"}
        </button>

        {isOpen && (
          <div className="flex gap-4 p-4">

        
     
        <Link to="/">Home</Link> 
   
        <Link to="/about">About</Link> 
     
        <Link to="/profile">Profile</Link>
       
        <Link to="/taskcreate">New Task</Link>
          
           </div> 
        )}
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/taskcreate" element={<TaskCreate />} />

      </Routes>
    </BrowserRouter>


    </>
  )
}

export default App