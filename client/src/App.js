import React from 'react'
import ShowData from './showData'
import GetData from './GetData'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Edit from './Edit';

function App() {
  return (
    <div className="App">
      <h3 style={{ padding: '30px', color: 'white', fontSize: '30px', background: 'black' }}>Curd Oparetion 2021</h3>
      <div className="col-12 d-flex  m-auto top">
        
          <ShowData />
        
      
          <GetData />
       
      </div>

    <Router>
    <switch>
    <Route exact path="/user/:id" component={Edit}/>
    </switch>
    </Router>



    </div>
  );
}

export default App;
