import React from 'react'
import { updateRecipe } from "../Services/recipes"


export default function Comment(props) {

  const { index, recipe, setRecipe } = props
  const { commentAuthor, commentDetails, commentTime } = props.comment


  const deleteComment = () => {

    const cloneRecipe = { ...recipe }
    cloneRecipe.comments.splice(index, 1)
    setRecipe(cloneRecipe)
    updateRecipe(recipe._id, cloneRecipe)
  
  }


  return (
    <div className=" border-gray-400 border-b-2 my-3 py-1 px-4 w-full ">
      <h4><b>{commentAuthor}</b></h4>
      <p>{commentDetails}</p>
      <p><i>{commentTime}</i></p>
      <button class="bg-orange-300 hover:bg-orange-600 text-white m-3 py-2 px-5 rounded focus:outline-none focus:shadow-outline" type="button" >
        Edit
      </button>
      <button class="bg-orange-300 hover:bg-orange-600 text-white m-3 py-2 px-5 rounded focus:outline-none focus:shadow-outline" onClick={deleteComment} type="button" >
        Delete
      </button>

    </div>
  )


}
