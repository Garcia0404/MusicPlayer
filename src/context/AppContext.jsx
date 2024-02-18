import { createContext, useEffect, useState } from "react";
export const contexto = createContext()
export const AppContext = ({ children }) => {
  const [play, setPlay] = useState(false)
  const [music, setMusic] = useState({
    name: 'Is This It',
    music: 'src/music/theStrokes/IsThisIt.mp3',
    album: {
      albumName: 'Is This It',
      albumImg: 'src/assets/albums/IsThisIt.png',
    }, 
    initial: 1
  })
  useEffect(() => {
    (music.initial === 1) ? setPlay(false) : setPlay(true)
  }
    , [music])
  return (
    <contexto.Provider value={{ play, setPlay, music, setMusic }}>
      {children}
    </contexto.Provider>
  )
}
