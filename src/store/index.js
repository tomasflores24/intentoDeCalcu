import React, { createContext, useContext, useState } from 'react'

export const Calculator = createContext({});
export const useCalculator = () => useContext(Calculator);
// ok. Account
export function CalculatorProvider({children}) {
  const [resultAccount, setResultAccount] = useState("");
  const [accountState, setAccountState] = useState();
  let aux = "";
  let previous = [];
  let flag = 0;
  const showAccount = ( num ) => {
    previous = [resultAccount[resultAccount.length - 1], resultAccount.length-1];
    if( isNaN(num) === false ){
      if( resultAccount === "" && num !== 0){
        aux = aux.concat(resultAccount, num);
      }else if(resultAccount.length > 0){
        if(flag){
          flag = 0;
          aux = aux.concat(num);
        }else{
          aux = aux.concat(resultAccount, num);
        }
      }
    }else{
      if( isNaN(previous[0]) === false ){
        aux = aux.concat(resultAccount, num);
      }else{
        aux = resultAccount.split("");
        aux[aux.length - 1] = num;

        aux = aux.join("");
        flag = 1;
      }
    }
    console.clear();
    console.log("==> ",aux);
    setResultAccount(aux);
  }
  
  const makeAccount = (num) => {
    
  }

  return (
    <Calculator.Provider
    value={{
      resultAccount,
      accountState,
      showAccount,
      makeAccount,
    }}>

      {children}
    </Calculator.Provider>
    
  )
}
