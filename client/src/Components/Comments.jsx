import React, { useState } from 'react';
import Comment from './Comment';
import AddComment from './AddComment';

export default function Comments(props) {

  const { recipe, setRecipe, id } = props

  const [commentLength, setCommentsLength] = useState(5)

  const increaseLength = () => {
    const newLength = commentLength + 5
    setCommentsLength(newLength)
  }
  return (
    <>
      <div class="content-center">
        <div>
          <button className="bg-blue-200 rounded-full py-1 px-5 outline-none" onClick={increaseLength}>
            Show More
          </button>
        </div>
        {/* comments 
        comments
        comments 
        comments 
        comments.slice().map() hook with display length, update number and hook w button, set max length,
         */}
        {recipe.comments && recipe.comments.slice(0, commentLength).map((comment, index) =>
          <Comment recipe={recipe} setRecipe={setRecipe} comment={comment} index={index} />
        )}
        <AddComment recipe={recipe} setRecipe={setRecipe} id={id} />
      </div>
    </>
  )


}
