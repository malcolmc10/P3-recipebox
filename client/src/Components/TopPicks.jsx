import React, {useEffect} from 'react'
import Recipe from './Recipe'
import {getRecipes} from '../Services/recipes'

export default function TopPicks() {
    useEffect(() => {
      (async () => {
        const recipes = await getRecipes()
        console.log(recipes)
      })()
      
    }, [])


  return (
    <div className="py-12">
      <h2 className="text-3xl sm:text-5xl text-center text-orange-500">Top Picks</h2>
      <div className="flex flex-wrap justify-evenly">
        <Recipe />
        <Recipe />
        <Recipe />
        <Recipe />
        <Recipe />
        <Recipe />
        <Recipe />
        <Recipe />
        <Recipe />
        <Recipe />
      </div>
    </div>
  )
}
