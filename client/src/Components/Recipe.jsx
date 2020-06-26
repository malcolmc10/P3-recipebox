import React from 'react'
import { Link } from 'react-router-dom'

export default function Recipe(props) {
  return (
    <div className="w-full sm:w-2/5 md:w-2/5 lg:w-3/12 lg:mx-4-perc shadow-lg my-5">

      <Link to={`recipe/${props.recipe._id}`}>
        <img className="h-56 w-full object-cover" src={props.recipe.coverImage} alt="cover" />
        <h3 className="font-bold text-xl text-center my-2 text-gray-800 px-2">{props.recipe.title}</h3>
      </Link>
      
    </div >
  )
}