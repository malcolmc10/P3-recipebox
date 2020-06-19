import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Home from './Pages/Home'
import Results from './Pages/Results'
import RecipeDetails from './Pages/RecipeDetails'

import {filter} from './Services/recipes'


function App() {

  console.log(filter())

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/results/:filter" component={Results} />
        <Route exact path="/recipe/:id" component={RecipeDetails} />
      </Switch>
    </Router>
  );
}

export default App;
