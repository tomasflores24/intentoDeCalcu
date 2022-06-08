import React, { useState } from 'react'
import "../../styles/NavBar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalculator, faClock } from "@fortawesome/free-solid-svg-icons" // fas
import {  } from "@fortawesome/free-brands-svg-icons" // fab



export function NavBar() {
    const [showTime, setShowTime] = useState(false);

    const momento = new Date();
    
    const Fun = ( params ) => {
        let numero;
        if(params === "hour"){
            numero = momento.getHours().toString();
            if(numero.length === 1){
                numero = `0${numero}`
            }
            return numero;

        }else{
            numero = momento.getMinutes().toString();
            if(numero.length === 1){
                numero = `0${numero}`
            }
            return numero;
        }
    }

    let hour =  Fun("hour");
    let minute = Fun("minute");

    const ShowHide = () => {

        setShowTime(true);
        setTimeout(() => {
            setShowTime(false);
        }, 1500);
    }

  return (
    <div className='header'>
        <div className='container-title-icon'>
            <i className='icon'><FontAwesomeIcon icon={faCalculator} /></i>
            <p className="title">Calculator</p>
    </div>

        {showTime 
         ? (<div className='container-time' onClick={() => setShowTime(false)}>
                <p className='time'>{hour}</p>
                <p className='time'>:</p>
                <p className='time'>{minute}</p>
            </div>)
         : <div onClick={() => ShowHide()} className="mostrar-hora"><FontAwesomeIcon icon={faClock}/></div>
         }
    </div>
  )
}
