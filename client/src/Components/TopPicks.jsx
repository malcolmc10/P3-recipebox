import React, { useEffect, useState } from 'react'
import Recipe from './Recipe'
import { getRecipes } from '../Services/recipes'

export default function TopPicks() {
  const [recipes, setRecipes] = useState(null)

  useEffect(() => {
    (async () => {
      setRecipes(await getRecipes())
    })()

  }, [])


  return (
    <div className="py-12">
      <h2 className="text-3xl sm:text-5xl text-center text-orange-500">Top Picks</h2>
      <div className="flex flex-wrap justify-evenly">

        {recipes && recipes.map((recipe) => <Recipe recipe={recipe} />)}

      </div>
    </div>
  )
}
