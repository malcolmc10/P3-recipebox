import React from 'react'
import logo from '../assets/logo_with_text.png'
import searchIcon from '../assets/zondicons/search.svg'


export default function Header() {
    return (
        <div>
            <ul className="flex justify-evenly items-center py-4 text-xl text-gray-600">
                <li><a href="#" className="text-orange-500">My RecipeBox</a></li>
                <li><a href="#">Recipes</a></li>
                <li><a href="#">Store</a></li>
                <li><a href="#"><img src={logo} className="w-20"/></a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Subscribe</a></li>
                <li><a href="#" className="text-orange-500">Log In</a></li>
                <li><a href="#"><img src={searchIcon} className="w-4"/></a></li>
            </ul>
        </div>
    )
}
