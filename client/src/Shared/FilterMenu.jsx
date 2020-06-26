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
              <input className="w-4 h-4 self-center" type="checkbox" name="seasonal" onChange={handleChange} />
              <label htmlFor="seasonal" className="ml-2">Seasonal</label>
            </li>

            <li className="py-1 flex justify-center sm:justify-start">
              <input className="w-4 h-4 self-center" type="checkbox" name="vegetarian" onChange={handleChange} />
              <label htmlFor="vegetarian" className="ml-2">Vegetarian</label>
            </li>

            <li className="py-1 flex justify-center sm:justify-start">
              <input className="w-4 h-4 self-center" type="checkbox" name="min30" onChange={handleChange} />
              <label htmlFor="min30" className="ml-2">30 mins</label>
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
              <input className="w-4 h-4 self-center" type="checkbox" name="lunch" onChange={handleChange} />
              <label htmlFor="lunch" className="ml-2">Lunch</label>
            </li>

            <li className="py-1 flex justify-center sm:justify-start">
              <input className="w-4 h-4 self-center" type="checkbox" name="dessert" onChange={handleChange} />
              <label htmlFor="dessert" className="ml-2">Dessert</label>
            </li>

            <li className="py-1 flex justify-center sm:justify-start">
              <input className="w-4 h-4 self-center" type="checkbox" name="snack" onChange={handleChange} />
              <label htmlFor="snack" className="ml-2">Snack</label>
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
              <input className="w-4 h-4 self-center" type="checkbox" name="italian" onChange={handleChange} />
              <label htmlFor="italian" className="ml-2">Italian</label>
            </li>

            <li className="py-1 flex justify-center sm:justify-start">
              <input className="w-4 h-4 self-center" type="checkbox" name="canadian" onChange={handleChange} />
              <label htmlFor="canadian" className="ml-2">Canadian</label>
            </li>

            <li className="py-1 flex justify-center sm:justify-start">
              <input className="w-4 h-4 self-center" type="checkbox" name="mexican" onChange={handleChange} />
              <label htmlFor="mexican" className="ml-2">Mexican</label>
            </li>
          </ul>
        </div>

        <div className="w-1/2 sm:w-auto px-2 sm:px-0">
          <h2 className="filter-headline text-xl sm:text-2xl text-center sm:text-left">Cuisines Cont.</h2>
          <ul className="py-3">
            <li className="py-1 flex justify-center sm:justify-start">
              <input className="w-4 h-4 self-center" type="checkbox" name="korean" onChange={handleChange} />
              <label htmlFor="korean" className="ml-2">Korean</label>
            </li>

            <li className="py-1 flex justify-center sm:justify-start">
              <input className="w-4 h-4 self-center" type="checkbox" name="japanese" onChange={handleChange} />
              <label htmlFor="japanese" className="ml-2">Japanese</label>
            </li>

            <li className="py-1 flex justify-center sm:justify-start">
              <input className="w-4 h-4 self-center" type="checkbox" name="thai" onChange={handleChange} />
              <label htmlFor="thai" className="ml-2">Thai</label>
            </li>

            <li className="py-1 flex justify-center sm:justify-start">
              <input className="w-4 h-4 self-center" type="checkbox" name="polish" onChange={handleChange} />
              <label htmlFor="polish" className="ml-2">Polish</label>
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
