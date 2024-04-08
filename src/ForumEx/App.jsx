import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';

const App = () => {
  const [title, setTitle] = useState("")
  const [type, setType] = useState("")

  const showData=()=>{
    console.log("tytuł: "+title+"; rodzaj: "+type)
  }

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<h1>Home</h1>}></Route>
          <Route path="/about" element={<h1>About</h1>}></Route>
          <Route path="/contact" element={<h1>contact</h1>}></Route>
          <Route path="/*" element={<h1>Nie ma takiej strony</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;