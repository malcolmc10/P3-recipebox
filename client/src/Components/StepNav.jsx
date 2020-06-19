
import React, { Component } from 'react'

export default class StepNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: recipe,
            step : 1,
            step : 2,
            step : 3,
            step : 4,

        }
    }
    render() {
        return (
            <div>
                <nav>
                    <div>
                        <a href="#">
                            <button onClick={}><h1>Step 1 </h1></button>
                        </a>
                    </div>
                    <div>
                        <a href="#">
                            <button onClick={}><h1>Step 2 </h1></button>
                        </a>
                    </div>
                    <div>
                        <a href="#">
                            <button onClick={}><h1>Step 3 </h1></button>
                        </a>
                    </div>
                    <div>
                        <a href="#">
                            <button onClick={}><h1>Step 4 </h1></button>
                        </a>
                    </div>
                    <div>
                        <a href="#">
                            <button onClick={}><h1>Step 5 </h1></button>
                        </a>
                    </div>
                    <div>
                        <a href="#">
                            <button onClick={}><h1>Back to Top </h1></button>
                        </a>
                    </div>

                </nav>
            </div>
        )
    }
}


    // Going to use an onClick function for each of the buttons. 

























