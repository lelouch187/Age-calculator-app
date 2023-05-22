import React, { useContext } from 'react'
import image from '../assets/images/icon-arrow.svg'
import { ContextApp } from '../Reducer'

const MyButton = () => {
  const {calculation} = useContext(ContextApp)
  return (
    <button onClick={calculation}
    className='button'>
      <img src={image} alt='result'/>
    </button>
  )
}

export default MyButton