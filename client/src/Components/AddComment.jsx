import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { addCommentAPI } from '../Services/recipes'


export default function AddComment(props) {

  const { setRecipe, id } = props

  const [comment, setComment] = useState({})

  // let history = useHistory();


  const handleChange = (event) => {
    const { name, value } = event.target
    setComment({ ...comment, [name]: value })
  }

  const sumbitComment = async () => {
    const date = await new Date()
    const time = await date.getTime()
    await setComment({ ...comment, commentTime: time })
    const response = await addCommentAPI(id, comment)
    console.log(response)
  }

  return (
    <>

      <div class="my-5 mx-auto max-w-xl">
        <h3 class="text-2xl text-bold mb-5">Your Comment</h3>
        <form>
          <textarea class="h-16 border border-gray-400 rounded-lg py-2 px-4 mb-4 block w-full appearance-none" name="commentAuthor" placeholder="name..." onChange={handleChange} ></textarea>

          <textarea class="h-16 border border-gray-400 rounded-lg py-2 px-4 mb-4 block w-full appearance-none" name="commentDetails" placeholder="leave a comment" onChange={handleChange} ></textarea>

          <button class="bg-orange-300 hover:bg-orange-600 text-white py-2 px-5 rounded focus:outline-none focus:shadow-outline" type="button" onClick={sumbitComment}>
            Add Comment
          </button>
        </form>
      </div>

    </>
  )
}
