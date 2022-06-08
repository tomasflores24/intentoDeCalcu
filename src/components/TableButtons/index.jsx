import React from 'react'
import { ButtonCal } from '../index'

export function TableButtons() {
  const arrButtonNumber = [9,8,7,6,5,4,3,2,1,0];
  const arrSimbolsMath = ["A",")","%","÷","X","-","+","=","D",","];
  
  

  return (
    <div className='container__tableButtons'>
      <div className="container__numbers">
        {arrButtonNumber.map( oneNum => <ButtonCal contents={oneNum} key={oneNum} /> )}
      </div>

      <hr />

      <div className="container__simbols">
        {arrSimbolsMath.map( oneSim => <ButtonCal contents={oneSim} key={oneSim}/>)}
      </div>
    </div>
  )
}
