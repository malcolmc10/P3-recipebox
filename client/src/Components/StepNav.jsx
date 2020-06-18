
import React, { Component } from "react";
import App from "./src/App";
import "index.css";

 
class StepNav extends Component {
  render() {
    return (
      <div>
        <nav>
          <div>
        <a  href="#">
            <h1>Step 1 <span>{this.props.}</span></h1>
          </a>
           </div>
           <div>
           <a  href="#">
            <h1>Step 2 <span>{this.props.}</span></h1>
          </a>
           </div>
           <div>
           <a  href="#">
            <h1>Step 3 <span>{this.props.}</span></h1>
          </a>
           </div>
           <div>
           <a  href="#">
            <h1>Step 4 <span>{this.props.}</span></h1>
          </a>
           </div>
           <div>
           <a  href="#">
            <h1>Step 5 <span>{this.props.}</span></h1>
          </a>
           </div>
          
        </nav>
      </div>
      
    );
  }
}
 
export default StepNav;