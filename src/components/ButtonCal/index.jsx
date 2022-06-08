import React from 'react'
import { useCalculator } from '../../store'

export function ButtonCal({contents}) {
  const {showAccount} = useCalculator();
  return (
    <>
      <button className='button__number' onClick={() => showAccount(contents)} >{contents}</button>
    </>

  )
}
