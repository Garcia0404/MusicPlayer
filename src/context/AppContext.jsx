import { createContext, useEffect, useState } from "react";
export const contexto = createContext()
export const AppContext = ({ children }) => {
  const [play, setPlay] = useState(false)
  const [random, setRandom] = useState(false)
  const [repeat, setRepeat] = useState(false)
  const [volume, setVolume] = useState(100)
  const [ likeSong, setLikeSong ] = useState(false)
  const [music, setMusic] = useState({
    name: 'Is This It',
    music: '/music/theStrokes/IsThisIt.mp3',
    album: {
      albumName: 'Is This It',
      albumImg: '/albums/IsThisIt.png',
    },
    initial: 1
  })
  useEffect(() => {
    (music.initial === 1) ? setPlay(false) : setPlay(true)
  }
    , [music])
  return (
    <contexto.Provider value={{ play, setPlay, music, setMusic, random, setRandom, repeat, setRepeat, volume, setVolume, likeSong, setLikeSong }}>
      {children}
    </contexto.Provider>
  )
}
