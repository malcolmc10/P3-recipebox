import React, { useEffect, useState } from 'react'
import Footer from '../Shared/Footer'
import { search } from '../Services/recipes'
import Recipe from '../Components/Recipe'


export default function Results(props) {
  const [recipes, setRecipes] = useState(null)

  useEffect(() => {
    (
      async () => {
        setRecipes(await search({ query: props.query, filters: props.filters }))
      }
    )()
  }, [props.query, props.filters])

  return (
    <div className="container bg-white mx-auto px-4 font-serif">
      <h1 className="text-4xl">Results</h1>
      <div className="flex flex-wrap justify-evenly">

        {recipes && recipes.map((recipe) => <Recipe key={recipe._id} recipe={recipe} />)}

      </div>
      <Footer />
    </div>
  )
}
