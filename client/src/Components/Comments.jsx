import React from 'react';
import Comment from './Comment';
import AddComment from './AddComment';

export default function Comments(props) {

  const { comments, setRecipe } = props
  
    return (
      <>
        <div class="content-center">

          <Comment comments= {comments}/>
          <AddComment setRecipe= {setRecipe}/>
        </div>
      </>
    )
  

}
