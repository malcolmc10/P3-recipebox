import React from 'react'
import SearchBar from './SearchBar'

export default function Search() {
  return (
    <div className="flex justify-evenly">
      <div className="text-2xl italic" style={{ color: '#6f6464' }}>
        <a href="#">Filter</a>
      </div>

      <SearchBar />
    </div>
  )
}
