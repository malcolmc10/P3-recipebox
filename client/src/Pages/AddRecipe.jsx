import React from 'react'
import Header from '../Shared/Header'
import Footer from '../Shared/Footer'
import AddIngredient from '../Components/AddIngredient'
import AddStep from '../Components/AddStep'



export default function AddRecipe() {
  return (
    <>
      <Header />

      <div className="my-5 mx-auto max-w-xl">
        <h1 className="text-3xl text-bold text-gray-400 mb-5">Add Your Recipe Here</h1>
        <form>

          <div className="flex flex-row ">
            <img className="h-auto w-2/6" src="https://lh3.googleusercontent.com/proxy/NXC0ggDM_VA7lfjNGfguZvvkDtrr3qQoiTh74big1Bs8CvHV7faPjqjyrI7aPgDPcVz0jGeTHtm8kxpDRgVAgJGu1T-XtcOOuCZraIs4OMO4mv2zhQp5IEcNKclthceXqms6ig0" alt="add photo" />

            <div className="w-full">
              <input className=" border border-gray-400 rounded-lg py-2 px-4 m-5 block w-full appearance-none" type="text" placeholder="Name of Recipe" />



              <div className="AmountAndTime flex flex-row justify-between">

                <div className=" flex flex-col mx-5">
                  <span>Serving Sizes:</span>
                  <input className="border border-gray-400 rounded-lg py-2 px-4  block w-full appearance-none" type="number" id="cookTime" name="cookTime" min="1" max="100" step="1" placeholder="0"></input>
                </div>

                <div className="flex flex-col mx-5">
                  <span>Cook Time:</span>
                  <div className="flex flex-row">
                    <input className="border border-gray-400 rounded-lg py-2 px-4  block w-full appearance-none" type="number" id="cookTime" name="cookTime" min="1" max="100" step="1" placeholder="0"></input>
                    <select className="border border-gray-400 rounded-lg py-2 px-4  block w-full " id="cookTimeUnit" name="cookTimeUnit">
                      <option value="minutes">minutes</option>
                      <option value="hours">hours</option>
                    </select>
                  </div>
                </div>

                

              </div>
              <input className="border  border-gray-400 rounded-lg py-2 px-4 m-1 block w-full appearance-none" type="text" placeholder="Image URL" />
            </div>
          </div>

          <AddIngredient />

          <AddStep />

          <button className="bg-orange-500 hover:bg-gray-400 text-white py-2 px-5 rounded focus:outline-none focus:shadow-outline" type="button">
            Submit
          </button>
        </form>

      </div>
      <Footer />
    </>
  )
}