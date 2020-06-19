
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
      <div>
        <nav>
          <div>
            <a href="#">
              <button onClick={this.state.step}><h1>Step 1 </h1></button>
            </a>
          </div>
          <div>
            <a href="#">
              <button><h1>Step 2 </h1></button>
            </a>
          </div>
          <div>
            <a href="#">
              <button><h1>Step 3 </h1></button>
            </a>
          </div>
          <div>
            <a href="#">
              <button><h1>Step 4 </h1></button>
            </a>
          </div>
          <div>
            <a href="#">
              <button><h1>Step 5 </h1></button>
            </a>
          </div>
          <div>
            <a href="#">
              <button><h1>Back to Top </h1></button>
            </a>
          </div>

        </nav>
      </div>
    )
  }
}


    // Going to use an onClick function for each of the buttons. 
    // Starting the build out the onClick functions to jump on the page. 
    // will need logic to have steps disappear when the steps are not needed.
    // Thinking about adding react smooth-scroll
    //  

























