import React from 'react'
import Recipe from './Recipe'

export default function TopPicks() {
  return (
    <div className="py-12">
      <h2 className="text-3xl sm:text-5xl text-center text-orange-500">Top Picks</h2>
      <div className="flex flex-wrap justify-evenly">
        <Recipe />
        <Recipe />
        <Recipe />
        <Recipe />
        <Recipe />
        <Recipe />
        <Recipe />
        <Recipe />
        <Recipe />
        <Recipe />
      </div>
    </div>
  )
}
