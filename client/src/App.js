import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Home from './Pages/Home'
import Results from './Pages/Results'
import RecipeDetails from './Pages/RecipeDetails'

function App() {


  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/results/:filter" component={Results} />
        <Route path="/recipe/:id" component={RecipeDetails} />
      </Switch>
    </Router>
  );
}

export default App;
