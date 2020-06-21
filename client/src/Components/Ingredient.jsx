import React from 'react'

export default function Ingredient(props) {
  const { amount, unit, consistency, name, meta} = props

  return (
    <>
      
      <div>{amount} {unit} {consistency} {name} {meta} </div>

    </>
  )
}
