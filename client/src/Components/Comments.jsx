import React from 'react';
import Comment from './Comment';
import AddComment from './AddComment';

export default function Comments(props) {

  const { comments, setRecipe, id } = props

  return (
    <>
      <div class="content-center">
        {comments && comments.map(comment =>
          <Comment comment={comment} />
        )}
        <AddComment setRecipe={setRecipe} id={id} />
      </div>
    </>
  )


}
