import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'


export default function StepNav() {
  return (
    <nav class="text-gray-400 text-center text-xl sm:text-sm md:text-base lg:text-lg xl:text-2xl">

      Step

      <a href="#step-1">
      <div class="relative pb-1/1 border-2 border-gray-400 mt-1 ">
        <div class="absolute h-full w-full flex">
            <h1 class="m-auto">1</h1>
        </div>
          </div>
      </a>

      <a href="#step-2">
      <div class="relative pb-1/1 border-2 border-gray-400 mt-1 ">
        <div class="absolute h-full w-full flex">
            <h1 class="m-auto">2</h1>
        </div>
          </div>
      </a>



      <a href="#step-3">
      <div class="relative pb-1/1 border-2 border-gray-400 mt-1 ">
        <div class="absolute h-full w-full flex">
            <h1 class="m-auto">3</h1>
        </div>
          </div>
      </a>


      <a href="#header">
      <div class="relative pb-1/1 border-2 border-gray-400 mt-1 ">
          <div class="absolute h-full w-full flex flex-col">
            <FontAwesomeIcon icon={faArrowUp} className="  h-1/3 m-auto"/>
            <h1 class=" text-base sm:text-base lg:text-xl m-auto leading-none">Back<br />to Top</h1>
        </div>
          </div>
      </a>


    </nav>
  )
}
























