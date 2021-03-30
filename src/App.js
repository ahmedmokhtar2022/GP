import React from 'react';
import './css/App.css';
import Nav from './components/Nav';
import Home from './Home';
import Statistics from './Statistics';
import Products from './Products';
import Saved from './Saved';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SideBar from './components/SideBar';
import About from './About';

function App() {
  return (
  <Router> 
    <div className="App">
      <Nav/>
      <SideBar/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/Statistics" component={Statistics}/>
        <Route path="/Products" component={Products}/>
        <Route path="/Saved" component={Saved}/>
        <Route path="/About" component={About}/>
      </Switch>
    </div>
    </Router>
  
  );
}
/*
const Homepage = () =>(
<div>

  <h1>Home Page</h1>

</div>

)
*/


export default App;
