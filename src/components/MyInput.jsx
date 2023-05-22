import React, { useContext } from 'react'
import { ContextApp } from '../Reducer'

const MyInput = ({placeHolder, value}) => {
  const {dispatch} = useContext(ContextApp)
  return (
    <input type='number'
    onChange={e=>dispatch({type:placeHolder, payload:e.target.value})}
    value={value}
    placeholder={placeHolder}
    className='input' />
  )
}

export default MyInput