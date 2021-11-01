import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./pages/home";
import Menu from "./compoents/home/Home";
import Cat from "./pages/cat";


export default function App() {
  return (
    
    <Router>
      {/* <Menu/> */}
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/cat" component={Cat}></Route>
        </Switch>
      
    </Router>
  );
}