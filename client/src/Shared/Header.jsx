import React, { useState } from 'react'
import logo from '../assets/logo.png'
import searchIcon from '../assets/zondicons/search.svg'
import hamburgerIcon from '../assets/zondicons/menu.svg'
import closeIcon from '../assets/zondicons/close.svg'
import Search from './Search'


export default function Header(props) {
  const [showSearch, setShowSearch] = useState(false)

  return (
    <div id="header">
      <ul className="flex sm:justify-evenly items-center py-4 text-xl text-gray-600 justify-between">
        <li className="sm:hidden">
          <a href="/" >
            <img src={hamburgerIcon} alt="hamburger icon" className="w-4" />
          </a>
        </li>

        <li className="hidden sm:block">
          <a href="/" className="text-orange-500">My RecipeBox</a>
        </li>
        <li className="hidden sm:block">
          <a href="/">Recipes</a>
        </li>

        <li className="hidden sm:block">
          <a href="/">Store</a>
        </li>

        <li>
          <a href="/"><img src={logo} alt="logo" className="w-16" />
          </a>
        </li>

        <li className="hidden sm:block">
          <a href="#footer">About</a>
        </li>

        <li className="hidden sm:block">
          <a href="/">Subscribe</a>
        </li>

        <li className="hidden sm:block">
          <a href="/" className="text-orange-500">Log In</a>
        </li>

        <li>
          <button onClick={() => setShowSearch(showSearch => !showSearch)}>
            <img src={showSearch ? closeIcon : searchIcon} alt="search icon" class="w-4" />
          </button>
        </li>

      </ul>
      {showSearch ? <Search setFilters={props.setFilters} setQuery={props.setQuery} /> : ''}
    </div>
  )
}
