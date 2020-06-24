import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { updateRecipe } from "../Services/recipes"


export default function AddComment(props) {

  const { recipe, setRecipe } = props

  const [comment, setComment] = useState({})

  // let history = useHistory();


  const handleChange = (event) => {
    const { name, value } = event.target
    setComment({ ...comment, [name]: value })
  }



  const submitComment = async () => {
    
    const cloneRecipe = { ...recipe }
    const date = new Date().toLocaleString()
    cloneRecipe.comments.push({ ...comment, commentTime: date })
    setRecipe(cloneRecipe)
    document.getElementById('author').value = ''
    document.getElementById('content').value = ''
    updateRecipe(recipe._id, cloneRecipe)

  }



  return (
    <>

      <div class="my-5 mx-auto max-w-xl">
        <h3 class="text-2xl text-bold mb-5">Your Comment</h3>
        <form>
          <textarea class="h-16 border border-gray-400 rounded-lg py-2 px-4 mb-4 block w-full appearance-none" onfocus="value=''" id='author' name="commentAuthor" placeholder="name..." onChange={handleChange} ></textarea>

          <textarea class="h-16 border border-gray-400 rounded-lg py-2 px-4 mb-4 block w-full appearance-none"  name="commentDetails" placeholder="leave a comment" id='content' onChange={handleChange} ></textarea>

          <button class="bg-orange-300 hover:bg-orange-600 text-white py-2 px-5 rounded focus:outline-none focus:shadow-outline" type="button" onClick={submitComment}>
            Add Comment
          </button>
        </form>
      </div>

    </>
  )
}
