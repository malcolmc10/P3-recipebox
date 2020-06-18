import React, { Component } from 'react'

export default class StepNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: recipe
        }
    }
    render() {
        return (
      <div>
        <nav>
          <div>
        <a  href="#">
            <h1>Step 1 <span>{this. state.props.recipe}</span></h1>
          </a>
           </div>
           <div>
           <a  href="#">
            <h1>Step 2 <span>{this.state.props.recipe}</span></h1>
          </a>
           </div>
           <div>
           <a  href="#">
            <h1>Step 3 <span>{this.state.props.recipe}</span></h1>
          </a>
           </div>
           <div>
           <a  href="#">
            <h1>Step 4 <span>{this.state.props.recipe}</span></h1>
          </a>
           </div>
           <div>
           <a  href="#">
            <h1>Step 5 <span>{this.state.props.recipe}</span></h1>
          </a>
           </div>
          
        </nav>
      </div>
        )}
}


    // thinking for the logic using if else statements to help with the placement when the buttons are pressed.
























// import React, { Component } from "react";
// import App from "./src/App";
// import "index.css";

//  class StepNav extends Component {
//   render() {
//     return (
//       <div>
//         <nav>
//           <div>
//         <a  href="#">
//             <h1>Step 1 <span>{this.props.recipe}</span></h1>
//           </a>
//            </div>
//            <div>
//            <a  href="#">
//             <h1>Step 2 <span>{this.props.recipe}</span></h1>
//           </a>
//            </div>
//            <div>
//            <a  href="#">
//             <h1>Step 3 <span>{this.props.recipe}</span></h1>
//           </a>
//            </div>
//            <div>
//            <a  href="#">
//             <h1>Step 4 <span>{this.props.recipe}</span></h1>
//           </a>
//            </div>
//            <div>
//            <a  href="#">
//             <h1>Step 5 <span>{this.props.recipe}</span></h1>
//           </a>
//            </div>
          
//         </nav>
//       </div>
      
//     );
//   }
// }
 
// export default StepNav;

