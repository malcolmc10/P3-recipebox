import React, { useEffect, useState } from 'react'
import Header from '../Shared/Header'
import Footer from '../Shared/Footer'
import { useLocation } from 'react-router-dom'
import queryString from 'query-string'
import { search } from '../Services/recipes'
import Recipe from '../Components/Recipe'


export default function Results() {

  const [recipes, setRecipes] = useState(null)

  const location = useLocation()
  const queryObj = queryString.parse(location.search)

  useEffect(() => {
    (
      async () => {
        setRecipes(await search(queryObj))
      }
    )()
  }, [queryObj.q])

  return (
    <div className="container bg-white mx-auto px-4 font-serif">
      <Header />
      <h1 className="text-4xl">Results</h1>
      <div className="flex flex-wrap justify-evenly">

        {recipes && recipes.map((recipe) => <Recipe key={recipe._id} recipe={recipe} />)}

      </div>
      <Footer />
    </div>
  )
}
