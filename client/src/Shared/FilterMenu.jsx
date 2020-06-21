import React from 'react'

export default function FilterMenu() {
  return (
    <>
      <div className="flex flex-wrap justify-between pb-4">
        <div className="w-1/2 sm:w-auto">
          <h2 className="filter-headline text-xl sm:text-2xl text-center sm:text-left">Themes</h2>
          <ul className="py-3">
            <li className="py-1 flex justify-center sm:justify-start">
              <input className="w-4 h-4 self-center" type="checkbox" />
              <label for="healthy" className="ml-2">Healthy</label>
            </li>

            <li className="py-1 flex justify-center sm:justify-start">
              <input className="w-4 h-4 self-center" type="checkbox" />
              <label for="healthy" className="ml-2">Healthy</label>
            </li>

            <li className="py-1 flex justify-center sm:justify-start">
              <input className="w-4 h-4 self-center" type="checkbox" />
              <label for="healthy" className="ml-2">Healthy</label>
            </li>

            <li className="py-1 flex justify-center sm:justify-start">
              <input className="w-4 h-4 self-center" type="checkbox" />
              <label for="healthy" className="ml-2">Healthy</label>
            </li>
          </ul>
        </div>

        <div className="w-1/2 sm:w-auto px-2 sm:px-0">
          <h2 className="filter-headline text-xl sm:text-2xl text-center sm:text-left">Meals</h2>
          <ul className="py-3">
            <li className="py-1 flex justify-center sm:justify-start">
              <input className="w-4 h-4 self-center" type="checkbox" />
              <label for="dinner" className="ml-2">Dinner</label>
            </li>

            <li className="py-1 flex justify-center sm:justify-start">
              <input className="w-4 h-4 self-center" type="checkbox" />
              <label for="dinner" className="ml-2">Dinner</label>
            </li>

            <li className="py-1 flex justify-center sm:justify-start">
              <input className="w-4 h-4 self-center" type="checkbox" />
              <label for="dinner" className="ml-2">Dinner</label>
            </li>

            <li className="py-1 flex justify-center sm:justify-start">
              <input className="w-4 h-4 self-center" type="checkbox" />
              <label for="dinner" className="ml-2">Dinner</label>
            </li>
          </ul>
        </div>

        <div className="w-1/2 sm:w-auto px-2 sm:px-0">
          <h2 className="filter-headline text-xl sm:text-2xl text-center sm:text-left">Cuisines</h2>
          <ul className="py-3">
            <li className="py-1 flex justify-center sm:justify-start">
              <input className="w-4 h-4 self-center" type="checkbox" />
              <label for="indian" className="ml-2">Indian</label>
            </li>

            <li className="py-1 flex justify-center sm:justify-start">
              <input className="w-4 h-4 self-center" type="checkbox" />
              <label for="indian" className="ml-2">Indian</label>
            </li>

            <li className="py-1 flex justify-center sm:justify-start">
              <input className="w-4 h-4 self-center" type="checkbox" />
              <label for="indian" className="ml-2">Indian</label>
            </li>

            <li className="py-1 flex justify-center sm:justify-start">
              <input className="w-4 h-4 self-center" type="checkbox" />
              <label for="indian" className="ml-2">Indian</label>
            </li>
          </ul>
        </div>

        <div className="w-1/2 sm:w-auto px-2 sm:px-0">
          <h2 className="filter-headline text-xl sm:text-2xl text-center sm:text-left">XxxxX</h2>
          <ul className="py-3">
            <li className="py-1 flex justify-center sm:justify-start">
              <input className="w-4 h-4 self-center" type="checkbox" />
              <label for="xxxxx" className="ml-2">Xxxxx</label>
            </li>

            <li className="py-1 flex justify-center sm:justify-start">
              <input className="w-4 h-4 self-center" type="checkbox" />
              <label for="xxxxx" className="ml-2">Xxxxx</label>
            </li>

            <li className="py-1 flex justify-center sm:justify-start">
              <input className="w-4 h-4 self-center" type="checkbox" />
              <label for="xxxxx" className="ml-2">Xxxxx</label>
            </li>

            <li className="py-1 flex justify-center sm:justify-start">
              <input className="w-4 h-4 self-center" type="checkbox" />
              <label for="xxxxx" className="ml-2">Xxxxx</label>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between items-center pb-4">
        <div>
          <button className="text-xl italic outline-none" style={{ color: '#6f6464' }}>Clear Filters</button>
        </div>
        <div>
          <button className="bg-blue-200 rounded-full py-1 px-5 outline-none">Apply</button>
        </div>
      </div>
    </>
  )
}
