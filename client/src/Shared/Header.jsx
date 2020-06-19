import React, { useState } from 'react'
import logo from '../assets/logo_with_text.png'
import searchIcon from '../assets/zondicons/search.svg'
import hamburgerIcon from '../assets/zondicons/menu.svg'
import closeIcon from '../assets/zondicons/close.svg'
import Search from './Search'


export default function Header() {
  const [showSearch, setShowSearch] = useState(true)

  return (
    <div>
      <ul className="flex sm:justify-evenly items-center py-4 text-xl text-gray-600 justify-between">
        <li className="sm:hidden">
          <a href="#" >
            <img src={hamburgerIcon} className="w-4" />
          </a>
        </li>

        <li className="hidden sm:block">
          <a href="#" className="text-orange-500">My RecipeBox</a>
        </li>
        <li className="hidden sm:block">
          <a href="#">Recipes</a>
        </li>

        <li className="hidden sm:block">
          <a href="#">Store</a>
        </li>

        <li>
          <a href="#"><img src={logo} className="w-16" />
          </a>
        </li>

        <li className="hidden sm:block">
          <a href="#">About</a>
        </li>

        <li className="hidden sm:block">
          <a href="#">Subscribe</a>
        </li>

        <li className="hidden sm:block">
          <a href="#" className="text-orange-500">Log In</a>
        </li>

        <li>
          <a href="#" onClick={() => setShowSearch(showSearch => !showSearch)}>
            <img src={showSearch ? closeIcon : searchIcon} className="w-4" />
          </a>
        </li>

      </ul>
      {showSearch ? <Search /> : ''}
    </div>
  )
}
