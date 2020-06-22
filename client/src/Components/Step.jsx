import React from 'react'

export default function Step(props) {

  const { step, description, stepImage } = props

  return (
    <div id={`step-${step}`} class="mt-10 py-3 leading-loose border-t-2 border-gray-400">
        <div><b>Step {step}: </b></div>
        <div>{description}</div>
        <img class="w-full h-auto" src={stepImage} alt={`step numer ${step}`} />
      </div>
  )
}
