import React from 'react'


export default function Comment(props) {
  const { commentAuthor, commentDetails, commentTime } = props.comment

  
  return (
    <div>

      <h4>{commentAuthor}</h4>
      <p>{commentDetails}</p>
      <p>{commentTime}</p>
    </div>
  )


}
