import React, { useState } from 'react'
import { getComment, addComment } from "../Services/recipes"

export default function AddComment(props) {

  const { recipe, setRecipe } = props
  const [comment, setComment] = useState({})

  const handleChange = (event) => {
    const { name, value } = event.target
    setComment({ ...comment, [name]: value })
  }

  
  const submitComment = async (e) => {
    e.preventDefault()
    const date = new Date().toLocaleString()
    await addComment(recipe._id, { ...comment, commentTime: date })
    let commentArr = await getComment(recipe._id)
    const cloneRecipe = { ...recipe }
    cloneRecipe.comments = commentArr
    setRecipe(cloneRecipe)
    document.getElementById('author').value = ''
    document.getElementById('content').value = ''
    setComment({})
  }

  return (
    <>
      <div className="my-5 mx-auto max-w-xl">
        <h3 className="text-2xl text-bold mb-5">Your Comment</h3>
        <form onSubmit = {submitComment}>
          <textarea className="h-16 border border-gray-400 rounded-lg py-2 px-4 mb-4 block w-full appearance-none"  id='author' name="commentAuthor" placeholder="name..." onChange={handleChange} required ></textarea>

          <textarea className="h-16 border border-gray-400 rounded-lg py-2 px-4 mb-4 block w-full appearance-none" name="commentDetails" placeholder="leave a comment" id='content' onChange={handleChange} required ></textarea>

          <button className="bg-blue-200 rounded-full py-1 px-5 outline-none" type="submit">
            Add Comment
          </button>
        </form>
      </div>
    </>
  )
}
