import React from 'react'
import Layout from './Shared/Layout'

export default function PostCreate() {
  return (
    <>
      <Layout showButton={false}>

      <div className="my-5 mx-auto max-w-xl">
        <h1 className="text-3xl text-bold mb-5">New Post</h1>
        <form className="">
          <input class="border border-gray-400 rounded-lg py-2 px-4 mb-4 block w-full appearance-none" type="text" placeholder="Name of Recipe" />

          <input class="border border-gray-400 rounded-lg py-2 px-4 mb-4 block w-full appearance-none" type="text" placeholder="Add Ingredients Here" />
          
          <input class="border border-gray-400 rounded-lg py-2 px-4 mb-4 block w-full appearance-none" type="text" placeholder="Add Image URL Here" />

          <textarea class="h-56 border border-gray-400 rounded-lg py-2 px-4 mb-4 block w-full appearance-none" type="text" placeholder="Add Step 1 Here"></textarea>

          <input class="border border-gray-400 rounded-lg py-2 px-4 mb-4 block w-full appearance-none" type="text" placeholder="Add Image URL Here" />

          <textarea class="h-56 border border-gray-400 rounded-lg py-2 px-4 mb-4 block w-full appearance-none" type="text" placeholder="Add Step 2 Here"></textarea>

          <input class="border border-gray-400 rounded-lg py-2 px-4 mb-4 block w-full appearance-none" type="text" placeholder="Add Image URL Here" />

<textarea class="h-56 border border-gray-400 rounded-lg py-2 px-4 mb-4 block w-full appearance-none" type="text" placeholder="Add Step 3 Here"></textarea>


          <button class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-5 rounded focus:outline-none focus:shadow-outline" type="button">
            Submit
          </button>
        </form>

        </div>
        </Layout>
    </>
  )
}