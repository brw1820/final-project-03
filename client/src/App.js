import React, {useEffect} from 'react';
import axios from "axios";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./containers/Home/Home.jsx";
import NoMatch from "./containers/NoMatch/NoMatch";

function App() {
  useEffect(()  =>  {
      axios.get("/api/config").then(response => {
        console.log(response.data)
      })
  }, [])
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route component={NoMatch}/>
      </Switch>
    </Router>
  );
}

export default App;
