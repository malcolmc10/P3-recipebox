import React from 'react'

export default function Ingredient(props) {
  const { amountNum, amountDen, unit, consistency, name, meta } = props
  
  const amountToFraction = function( amountNum, amountDen ) {
    if (amountDen === 1) {
      return `${amountNum}`
    } else {
      return `${amountNum}/${amountDen}`
    }
  };

  console.log(props)

  return (
    <>
      
      <div>{amountToFraction(amountNum, amountDen)} {unit} {consistency} {name} {meta} </div>

    </>
  )
}
