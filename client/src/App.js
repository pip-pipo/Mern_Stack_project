import React from 'react'
import ShowData from './showData'
import GetData from './GetData'
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <h3 style={{ padding: '30px', color: 'white', fontSize: '30px', background: 'black' }}>Curd Oparetion 2021</h3>
      <div className="col-12 d-flex">
        <div className="col-6 mx-2">
          <ShowData />
        </div>
        <div className="col-6 mx-2">
          <GetData />
        </div>
      </div>
    </div>
  );
}

export default App;
