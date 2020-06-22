import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagramSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'



export default function Footer() {
  
  return (
    <div class="justify-center text-5xl flex   text-gray-500  space-x-10 > *">
      <FontAwesomeIcon icon={faFacebookSquare} />
      <FontAwesomeIcon icon={faInstagramSquare} />
      <FontAwesomeIcon icon={faTwitterSquare} />
    </div>
  )
}

