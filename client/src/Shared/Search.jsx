import React, { useState } from 'react'
import SearchBar from './SearchBar'
import FilterMenu from './FilterMenu'

export default function Search() {

  const [showFilterMenu, setShowFilterMenu] = useState(false)

  return (
    <>
      <div className="flex justify-evenly pb-4">
        <div className="text-xl sm:text-2xl italic" style={{ color: '#6f6464' }}>
          <a
            href="#header"
            onClick={() => setShowFilterMenu(val => !val)}>
            Filter
          </a>
        </div>

        <SearchBar />
      </div>
      <div>
        {showFilterMenu ? <FilterMenu /> : ''}
      </div>
    </>
  )
}
