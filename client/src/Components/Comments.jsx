import React, { useState } from 'react'
import Comment from './Comment'
import AddComment from './AddComment'

export default function Comments(props) {

  const { comments, recipe, setRecipe, id } = props
  const [commentLength, setCommentsLength] = useState(5)

  const increaseLength = () => {
    const newLength = commentLength + 5
    setCommentsLength(newLength)
  }

  return (
    <>
      <div className="content-center">

        <AddComment recipe={recipe} setRecipe={setRecipe} id={id} />

        {comments && comments.slice(0, commentLength).map((comment, index) =>
          <Comment recipe={recipe} setRecipe={setRecipe} comment={comment} index={index} key={index} />
        )}

        {(recipe.comments && recipe.comments.length > commentLength) ?
          <button className="bg-orange-400 rounded-full py-1 px-5  mx-4 outline-none" onClick={increaseLength}>
            Show More...
          </button> : <div />
        }
        
      </div>
    </>
  )
}
