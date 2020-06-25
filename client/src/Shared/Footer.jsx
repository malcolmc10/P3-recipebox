import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagramSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'



export default function Footer() {
  
  return (
    <>
      <div id="footer" className="container bg-white mx-auto px-32 font-serif my-12">
      <div className="hidden sm:block text-5xl text-gray-500">
        About Us
      </div>
      <div className="hidden sm:block">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui aperiam nihil, consectetur harum dolore repellendus quis dolorum placeat corporis laudantium excepturi sunt a quo repellat animi distinctio beatae ad repudiandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum esse, sint ex consequuntur itaque soluta cupiditate recusandae nesciunt debitis quae, rem ullam corrupti earum alias magni! Eum error dolorum quod!</p>
      </div>
    <div class="justify-center my-5 text-5xl flex   text-gray-500  space-x-10 > *">
      <FontAwesomeIcon icon={faFacebookSquare} />
      <FontAwesomeIcon icon={faInstagramSquare} />
      <FontAwesomeIcon icon={faTwitterSquare} />
    </div>
    </div>
      </>
  )
}

