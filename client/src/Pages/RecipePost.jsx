import React from 'react'
import Header from '../Shared/Header'
import Footer from '../Shared/Footer'


export default function RecipePost() {
  return (
    <>
      <Header />

      <div className="my-5 mx-auto max-w-xl">
        <h1 className="text-3xl text-bold text-gray-400 mb-5">Add Your Recipe Here</h1>
        <form>
          <input className="border border-gray-400 rounded-lg py-2 px-4 mb-4 block w-full appearance-none" type="text" placeholder="Name of Recipe" />

          <input className="border border-gray-400 rounded-lg py-2 px-4 mb-4 block w-full appearance-none" type="text" placeholder="Add Ingredients Here" />
          
          <input className="border border-gray-400 rounded-lg py-2 px-4 mb-4 block w-full appearance-none" type="text" placeholder="Add Image URL Here" />

          <textarea className="h-56 border border-gray-400 rounded-lg py-2 px-4 mb-4 block w-full appearance-none" type="text" placeholder="Add Step 1 Here"></textarea>

          <input className="border border-gray-400 rounded-lg py-2 px-4 mb-4 block w-full appearance-none" type="text" placeholder="Add Image URL Here" />

          <textarea className="h-56 border border-gray-400 rounded-lg py-2 px-4 mb-4 block w-full appearance-none" type="text" placeholder="Add Step 2 Here"></textarea>

          <input className="border border-gray-400 rounded-lg py-2 px-4 mb-4 block w-full appearance-none" type="text" placeholder="Add Image URL Here" />

        <textarea className="h-56 border border-gray-400 rounded-lg py-2 px-4 mb-4 block w-full appearance-none" type="text" placeholder="Add Step 3 Here"></textarea>


          <button className="bg-orange-500 hover:bg-gray-400 text-white py-2 px-5 rounded focus:outline-none focus:shadow-outline" type="button">
            Submit
          </button>
        </form>

        </div>
       <Footer /> 
    </>
  )
}