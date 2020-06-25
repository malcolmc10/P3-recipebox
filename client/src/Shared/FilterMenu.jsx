import React, { useState, } from 'react'
import _ from 'underscore' // It's !Joke
import { useHistory } from 'react-router-dom'



export default function FilterMenu(props) {

  const [filters, setFilters] = useState({})

  let history = useHistory();

  const handleApply = () => {
    history.push('/results')
    props.setFilters(filters)
  }

  const handleChange = (e) => {
    const name = e.target.name
    const checked = e.target.checked

    if (checked) {
      setFilters(prevFilters => (
        {
          ...prevFilters,
          [name]: checked
        }
      ))
    }
    else {
      setFilters(prevFilters => (
        {
          ..._.omit(prevFilters, name)
        }
      ))
    }

  }

  return (
    <>
      <div className="flex flex-wrap justify-between pb-4">
        <div className="w-1/2 sm:w-auto">
          <h2 className="filter-headline text-xl sm:text-2xl text-center sm:text-left">Themes</h2>
          <ul className="py-3">
            <li className="py-1 flex justify-center sm:justify-start">
              <input className="w-4 h-4 self-center" type="checkbox" name="healthy" onChange={handleChange} />
              <label htmlFor="healthy" className="ml-2">Healthy</label>
            </li>

            <li className="py-1 flex justify-center sm:justify-start">
              <input className="w-4 h-4 self-center" type="checkbox" name="healthy" onChange={handleChange} />
              <label htmlFor="healthy" className="ml-2">Healthy</label>
            </li>

            <li className="py-1 flex justify-center sm:justify-start">
              <input className="w-4 h-4 self-center" type="checkbox" name="healthy" onChange={handleChange} />
              <label htmlFor="healthy" className="ml-2">Healthy</label>
            </li>

            <li className="py-1 flex justify-center sm:justify-start">
              <input className="w-4 h-4 self-center" type="checkbox" name="healthy" onChange={handleChange} />
              <label htmlFor="healthy" className="ml-2">Healthy</label>
            </li>
          </ul>
        </div>

        <div className="w-1/2 sm:w-auto px-2 sm:px-0">
          <h2 className="filter-headline text-xl sm:text-2xl text-center sm:text-left">Meals</h2>
          <ul className="py-3">
            <li className="py-1 flex justify-center sm:justify-start">
              <input className="w-4 h-4 self-center" type="checkbox" name="dinner" onChange={handleChange} />
              <label htmlFor="dinner" className="ml-2">Dinner</label>
            </li>

            <li className="py-1 flex justify-center sm:justify-start">
              <input className="w-4 h-4 self-center" type="checkbox" name="dinner" onChange={handleChange} />
              <label htmlFor="dinner" className="ml-2">Dinner</label>
            </li>

            <li className="py-1 flex justify-center sm:justify-start">
              <input className="w-4 h-4 self-center" type="checkbox" name="dinner" onChange={handleChange} />
              <label htmlFor="dinner" className="ml-2">Dinner</label>
            </li>

            <li className="py-1 flex justify-center sm:justify-start">
              <input className="w-4 h-4 self-center" type="checkbox" name="dinner" onChange={handleChange} />
              <label htmlFor="dinner" className="ml-2">Dinner</label>
            </li>
          </ul>
        </div>

        <div className="w-1/2 sm:w-auto px-2 sm:px-0">
          <h2 className="filter-headline text-xl sm:text-2xl text-center sm:text-left">Cuisines</h2>
          <ul className="py-3">
            <li className="py-1 flex justify-center sm:justify-start">
              <input className="w-4 h-4 self-center" type="checkbox" name="indian" onChange={handleChange} />
              <label htmlFor="indian" className="ml-2">Indian</label>
            </li>

            <li className="py-1 flex justify-center sm:justify-start">
              <input className="w-4 h-4 self-center" type="checkbox" name="indian" onChange={handleChange} />
              <label htmlFor="indian" className="ml-2">Indian</label>
            </li>

            <li className="py-1 flex justify-center sm:justify-start">
              <input className="w-4 h-4 self-center" type="checkbox" name="indian" onChange={handleChange} />
              <label htmlFor="indian" className="ml-2">Indian</label>
            </li>

            <li className="py-1 flex justify-center sm:justify-start">
              <input className="w-4 h-4 self-center" type="checkbox" name="indian" onChange={handleChange} />
              <label htmlFor="indian" className="ml-2">Indian</label>
            </li>
          </ul>
        </div>

        <div className="w-1/2 sm:w-auto px-2 sm:px-0">
          <h2 className="filter-headline text-xl sm:text-2xl text-center sm:text-left">XxxxX</h2>
          <ul className="py-3">
            <li className="py-1 flex justify-center sm:justify-start">
              <input className="w-4 h-4 self-center" type="checkbox" name="xxxxx" onChange={handleChange} />
              <label htmlFor="xxxxx" className="ml-2">Xxxxx</label>
            </li>

            <li className="py-1 flex justify-center sm:justify-start">
              <input className="w-4 h-4 self-center" type="checkbox" name="xxxxx" onChange={handleChange} />
              <label htmlFor="xxxxx" className="ml-2">Xxxxx</label>
            </li>

            <li className="py-1 flex justify-center sm:justify-start">
              <input className="w-4 h-4 self-center" type="checkbox" name="xxxxx" onChange={handleChange} />
              <label htmlFor="xxxxx" className="ml-2">Xxxxx</label>
            </li>

            <li className="py-1 flex justify-center sm:justify-start">
              <input className="w-4 h-4 self-center" type="checkbox" name="xxxxx" onChange={handleChange} />
              <label htmlFor="xxxxx" className="ml-2">Xxxxx</label>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between items-center pb-4">
        <div>
          <button className="text-xl italic outline-none" style={{ color: '#6f6464' }}>Clear Filters</button>
        </div>
        <div>
          <button className="bg-blue-200 rounded-full py-1 px-5 outline-none" onClick={handleApply}>Apply</button>
        </div>
      </div>
    </>
  )
}
