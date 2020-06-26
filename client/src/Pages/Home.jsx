import React, { Component } from 'react'
import HomeCover from '../Components/HomeCover'
import TopPicks from '../Components/TopPicks'
import Footer from '../Shared/Footer'

class Home extends Component {
  render() {
    return (
      <div className="container bg-white mx-auto px-4 font-serif">
        <HomeCover />
        <TopPicks />
        <Footer />
      </div>

    );
  }
}

export default Home