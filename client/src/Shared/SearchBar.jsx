import React, { useState } from 'react'
import searchIcon from '../assets/zondicons/search.svg'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'


export default function SearchBar(props) {

  let history = useHistory();

  const [query, setQuery] = useState('')


  const handleInputChange = (e) => {
    setQuery(e.target.value)
  }
  const handleClick = () => {
    history.push('/results')

    props.setQuery(query)

  }
  return (
    <div className="w-3/5 relative">
      <input type="text" className="bg-gray-200 border border-gray-300 rounded-full h-8 outline-none px-3 w-full" onChange={handleInputChange} />

      {/* <Link
        to={{
          pathname: "/results",
          search: "?q=" + query,
        }} */}
      <button className="absolute outline-none"
        style={{ top: '8px', right: '15px' }} onClick={handleClick}>
        <img className="w-4" src={searchIcon} alt="search icon" />
      </button>
      {/* </Link> */}
    </div>
  )
}
