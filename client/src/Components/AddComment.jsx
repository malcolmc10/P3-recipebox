import React, { useState } from 'react'
import { createPost } from './services/posts'
import { useHistory } from 'react-router-dom'

export default function PostCreate() {
  let history = useHistory();
  const [post, setPost] = useState({})


  const handleChange = (event) => {
    const { name, value } = event.target
    setPost({ ...post, [name]: value })
  }

  const sumbitPost = async () => {
    await createPost(post)
    await history.push('/')
  }

  return (
    <>
      <Layout showButton={false}>

        <div>
          <h1>Add a Comment:</h1>
          <form>

            <input type="text" name="name" placeholder="Name" value={post.name} onChange={handleChange} />

            <input type="text" name="imgURL" placeholder="Image URL" value={post.imgURL}
              onChange={handleChange} />

            <textarea name="content" placeholder="Content" value={post.content} onChange={handleChange} ></textarea>

            <button type="button" onClick={sumbitPost}>
              Submit
          </button>
          </form>
        </div>
      </Layout>
    </>
  )
}