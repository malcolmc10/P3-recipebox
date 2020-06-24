import React, { useState } from 'react'
import { updateRecipe } from "../Services/recipes"

export default function Comment(props) {

  const { index, recipe, setRecipe } = props
  const { commentAuthor, commentDetails, commentTime } = props.comment

  const [isClicked, setClick] = useState(false)
  const [comment, setComment] = useState({})

  const handleChange = (event) => {
    const { name, value } = event.target
    setComment({
      ...comment,
      [name]: value
    })
  }

  const handleEditClick = () => {
    setClick(!isClicked)
    setComment({
      ...comment,
      commentAuthor: commentAuthor,
      commentDetails: commentDetails,
      commentTime: commentTime
    })
  }

  const handleSubmitClick = () => {
    const cloneRecipe = { ...recipe }
    cloneRecipe.comments[index] = comment
    setRecipe(cloneRecipe)
    updateRecipe(recipe._id, cloneRecipe)
    setClick(!isClicked)
  }

  const deleteComment = () => {
    const cloneRecipe = { ...recipe }
    cloneRecipe.comments.splice(index, 1)
    setRecipe(cloneRecipe)
    updateRecipe(recipe._id, cloneRecipe)
  }

  return (
    <div className=" border-gray-400 border-b-2 my-3 py-1 px-4 w-full ">
      
      <h4><b>{commentAuthor}</b></h4>

      {isClicked ? <textarea class="h-full border border-gray-400 rounded-lg py-2 px-4 mb-4 block w-full appearance-none" value={comment.commentDetails} name="commentDetails" id='content' onChange={handleChange}></textarea> : <p>{commentDetails}</p>}

      <p className="text-sm text-gray-500"><i>{commentTime}</i></p>

      {isClicked ?
      <button class="bg-green-300 hover:bg-green-600 text-white m-3 py-2 px-5 rounded focus:outline-none focus:shadow-outline" onClick={handleSubmitClick} type="button"> 
        Submit
      </button> :
      <button class="bg-orange-300 hover:bg-orange-600 text-white m-3 py-2 px-5 rounded focus:outline-none focus:shadow-outline" onClick={handleEditClick} type="button">
        Edit
      </button>}

      <button class="bg-orange-300 hover:bg-orange-600 text-white m-3 py-2 px-5 rounded focus:outline-none focus:shadow-outline" onClick={deleteComment} type="button" >
        Delete
      </button>

    </div>
  )
}
