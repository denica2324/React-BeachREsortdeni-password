import React from 'react';
import "./App.css";
import Home from "./pages/Home"
import Rooms from "./pages/Rooms"
import SingleRoom from "./pages/SingleRoom"
import Error from "./pages/Error"
import { Route, Switch } from "react-router-dom"
import NavBar from './components/NavBar';
import Login from './components/Login'
import Register from './components/Register'

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
         <Route exact path="/register" component={Register} />
          <Route exact path="/rooms" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route component={Error} />
      </Switch>
    </div>
  )
}

export default App;
