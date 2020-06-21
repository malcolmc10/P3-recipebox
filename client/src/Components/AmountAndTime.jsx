import React from 'react'

export default function AmountAndTime(props) {
  const {servesPeople, cookTime, cookTimeUnit} = props
  return (
    <div class="flex justify-between">
      <div>
        Serving Size <br />
        {servesPeople} People
      </div>
      <div>
        Cook Time <br />
        {cookTime} {cookTimeUnit}
      </div>
    </div>
  )
}
