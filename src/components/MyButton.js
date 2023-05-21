import React from 'react'
import image from '../assets/images/icon-arrow.svg'

const MyButton = () => {
  return (
    <button className='button'>
      <img src={image} alt='result'/>
    </button>
  )
}

export default MyButton