import React from 'react'
import homeCover from '../assets/homeCover.jpg'

export default function HomeCover() {
  return (
    <div className="w-full bg-cover h-250px sm:h-500px" style={{backgroundImage: `url(${homeCover})`}}>
      <div className="overlay"></div>
      <div className="w-full h-full flex justify-center items-center">
        <h1 className="text-3xl sm:text-5xl text-white" style={{textShadow: '0 1px 4px rgba(0, 0, 0, 0.6)'}}>Top 10 Summer Foods</h1>
      </div>
    </div>
  )
}
