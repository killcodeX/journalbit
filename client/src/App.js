import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./container/Home";
import Header from './components/header';
import Login from './container/Auth/login';
import Register from './container/Auth/register';

function App() {
  const location = useLocation();
  return (
    <>
      {location.pathname !== "/login" && location.pathname !== "/register"? <Header />:null}
      <Switch>
        <Route exact path="/" exact component={Home} />
        <Route exact path="/login" exact component={Login} />
        <Route exact path="/register" exact component={Register} />
      </Switch>
    </>
  )
}

export default App;
