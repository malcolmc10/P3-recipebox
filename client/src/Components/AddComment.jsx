import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'


export default function AddComment(props) {

  const { setRecipe } = props

  let history = useHistory();


  const handleChange = (event) => {
    const { name, value } = event.target
    // setComment({ ...comment, [name]: value })
  }

  const sumbitComment = async () => {
    // await createPost(post)

  }

  return (
    <>

      <div class="my-5 mx-auto max-w-xl">
        <h3 class="text-2xl text-bold mb-5">Your Comment</h3>
        <form>

          <textarea class="h-16 border border-gray-400 rounded-lg py-2 px-4 mb-4 block w-full appearance-none" name="content" onChange={handleChange} ></textarea>

          <button class="bg-orange-300 hover:bg-orange-600 text-white py-2 px-5 rounded focus:outline-none focus:shadow-outline" type="button" onClick={sumbitComment}>
            Add Comment
          </button>
        </form>
      </div>

    </>
  )
}
