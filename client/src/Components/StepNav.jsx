
import React, { Component } from 'react'


export default class StepNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: {},
      step: 1
    }
  }

  render() {
    return (
      <nav>
        Step

        {/* <aside class="xl:w-40 xl:sticky w-full h-64 overflow-hidden shadow-lg rounded mr-4 mb-4 xl:mb-0 " style={{ top: '10px' }}></aside> */}


        <a href="#step-1">
          <div class="h-40 w-full border-2 border-gray-400 m-1 align-bottom py-16">
            <h1>1</h1>
          </div>
        </a>


        <a href="#step-2">
          <div class="h-40 w-full border-2 border-gray-400 m-1 py-16">
            2
          </div>
        </a>



        <a href="#step-3">
          <div class="h-40 w-full border-2 border-gray-400 m-1 py-16">
            3
        </div>
        </a>



        <a href="#">
        <div class="h-40 w-full border-2 border-gray-400 m-1 py-2">
            Back<br />to<br />Top
        </div>
        </a>

      </nav>
    )
  }
}


    // Going to use an onClick function for each of the buttons. 
    // Starting the build out the onClick functions to jump on the page. 
    // will need logic to have steps disappear when the steps are not needed.
    // Thinking about adding react smooth-scroll
    //  

























