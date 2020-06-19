import React, { Component } from 'react'
import Header from '../Shared/Header'
import HomeCover from '../Components/HomeCover'

class Home extends Component {
  render() {
    return (
      <div className="container bg-white mx-auto px-4 font-serif">
        <Header />
        <HomeCover />
      </div>
    );
  }
}

export default Home;