import React from 'react'


export default function Comment(props) {
  const { commentAuthor, commentDetails } = props.comment



  return (
    <div>

      <h4>{commentAuthor}</h4>
      <p>{commentDetails}</p>
    </div>
  )


}
