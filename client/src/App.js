import React, { useState } from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Home from './Pages/Home'
import Results from './Pages/Results'
import RecipeDetails from './Pages/RecipeDetails'
import AddRecipe from './Pages/AddRecipe'
import Header from './Shared/Header'
import Footer from './Shared/Footer'

function App() {

  const [query, setQuery] = useState('')
  const [filters, setFilters] = useState(null)

  return (
    <div className="container bg-white mx-auto px-4 font-serif">
      <Router>
        <Header setQuery={setQuery} setFilters={setFilters} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/results" render={() => <Results query={query} filters={filters} />} />
          <Route path="/recipe/:id" component={RecipeDetails} />
          <Route exact path="/addrecipe" component={AddRecipe} />
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}

export default App
