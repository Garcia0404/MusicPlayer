import { createContext, useState } from "react";
export const contexto = createContext()
export const AppContext = ({children}) => {
  const [ play,setPlay ] = useState (false)
  return (
    <contexto.Provider value={{play,setPlay}}>
      {children}
    </contexto.Provider>
  )
}
