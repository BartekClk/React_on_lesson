import React, { useState } from 'react';
import './App.css';


const App = () => {
  const [title, setTitle] = useState("")
  const [type, setType] = useState("")

  const showData=()=>{
    console.log("tytuł: "+title+"; rodzaj: "+type)
  }

  return (
    <div className="app">
      <form className='' >
        <div className="form-group">
          <label for="title">Tytuł filmu</label>
          <input type="text" className="form-control mt-2" id="title" onChange={(e)=>{setTitle(e.target.value)}} />
        </div>
        <div className="form-group mt-3">
          <label for="type">Rodzaj</label>
          <select class="form-select" id="type" onChange={(e)=>{setType(e.target.value)}}>
            <option selected></option>
            <option value="1">Komedia</option>
            <option value="2">Obyczajowy</option>
            <option value="3">Sensacyjny</option>
            <option value="4">Horror</option>
          </select>
        </div>
        <button type="button" class="btn btn-primary mt-3" onClick={showData}>Dodaj</button>
      </form>
    </div>
  );
};

export default App;