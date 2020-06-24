import React from 'react';
import Comment from './Comment';
import AddComment from './AddComment';

export default function Comments(props) {

  const { recipe, setRecipe, id } = props

  return (
    <>
      <div class="content-center">
        
        {recipe.comments && recipe.comments.map((comment, index) =>
          <Comment recipe={recipe} setRecipe={setRecipe} comment={comment} index={index}/>
        )}
        <AddComment recipe={recipe} setRecipe={setRecipe} id={id} />
      </div>
    </>
  )


}
