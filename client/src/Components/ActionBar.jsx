import React from 'react'
import heart from '../assets/zondicons/heart.svg'
import share from '../assets/zondicons/share.svg'

export default function ActionBar() {
  return (
    <div class="text-2xl text-bold mb-5 text-center flex justify-between">
      <img src={heart} alt="favorite icon" class="h-10 w-auto" />
      <img src={share} alt="favorite icon" class="h-10 w-auto" />
    </div>
  )
}
