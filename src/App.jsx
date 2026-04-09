import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './component/home'
import About from './component/about'
import Login from './component/login'


function App() {
  return (
    <Router basename="/saku">
      <div>
        <h1>Hello, User!</h1>
        <nav>
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/login">Login/Sign-Up</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App