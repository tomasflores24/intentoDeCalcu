import React from 'react'
import { useCalculator } from '../../store'

export function Result() {
  const {resultAccount} = useCalculator();
  return (
    <div className='container__result'>
      Result: {resultAccount}
    </div>
  )
}
