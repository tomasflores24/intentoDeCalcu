import React from 'react'
import { useCalculator } from '../../store'

export function Account() {
  const {accountState} = useCalculator();
  return (
    <div className='container__account'>
      Account: {accountState}
    </div>
  )
}
