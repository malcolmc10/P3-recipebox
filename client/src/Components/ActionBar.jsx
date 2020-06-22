import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { faHeart as HeartFilled } from '@fortawesome/free-solid-svg-icons'
import { faHeart as HeartEmpty } from '@fortawesome/free-regular-svg-icons'


export default function ActionBar() {

  const [isClicked, setClick] = useState(false)


  const handleHeartClick = () => { 
    setClick(!isClicked)
  }

  return (
    <div className="text-2xl text-bold mb-5 text-center flex justify-between">

      <button onClick={handleHeartClick}>
        {isClicked ? <FontAwesomeIcon icon={HeartFilled} className="text-red-500" /> : <FontAwesomeIcon icon={HeartEmpty} />}
      </button>


      <button>
        <FontAwesomeIcon icon={faExternalLinkAlt} />
      </button>

    </div>
  )
}