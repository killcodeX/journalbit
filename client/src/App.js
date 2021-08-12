import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./container/Home";
import Header from './components/header';
import Login from './container/Auth/login';
import Register from './container/Auth/register';
import Profile from './container/Profile' 

function App() {
  const location = useLocation();
  return (
    <>
      {location.pathname !== "/login" && location.pathname !== "/register"? <Header />:null}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </>
  )
}

export default App;
