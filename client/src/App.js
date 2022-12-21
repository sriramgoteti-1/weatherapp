
import Header from "./components/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import React from 'react'

function App() {
  var React= require('react')
  var myPosts=[]
  return (
    <Router>
    <Switch>
      <Route exact path="/">
        <Header myPosts={myPosts}/>
      </Route>
    </Switch>
  </Router>
  );
}

export default App;
