import { useContext, useEffect, useState } from 'react'
import { contexto } from '../../../context/AppContext'
export const PlaySong = ({ song, listen }) => {
  const { play, setPlay, music, setMusic,recent,setRecent } = useContext(contexto)
  const [startMusic, setStartMusic] = useState(listen)
  function handleClick() {
    setStartMusic(!startMusic)
    setMusic(song)
    if(startMusic){
      setPlay(false)
    }
  }
  useEffect(()=>{
    if (play&&song.name==music.name) setStartMusic(true)
    if (music.name) {
      if (recent.length > 0) {
        const index = recent.findIndex((song) => song.name == music.name);
        if (index!==-1) {
          const song = recent[index]
          recent.splice(index,1)
          const updatedRecent = [song, ...recent]
          setRecent(updatedRecent)
        }
      }
    }
  },[])
  useEffect(()=>{
    if (play&&song==music) setStartMusic(true)
  },[recent])

  useEffect(() => {
    if (song == music) {
      if (startMusic) setPlay(true)
    }else setStartMusic(false)
  }, [music, startMusic])

  useEffect(()=>{
    if(song == music){
      if (play) setStartMusic(true)
    }
  },[play])
  
  useEffect(()=>{
    if (play && song==music){ 
      setStartMusic(true)
    }
    if(!play && song==music) setStartMusic(false)
  },[play,music])
  const changeStyle1 = startMusic ? 'hidden' : 'block'
  const changeStyle2 = startMusic ? 'block' : 'hidden'
  return (
    <div>
      <svg onClick={handleClick} className={`${changeStyle1} w-8 h-8 bg-greenMain border-none stroke-black fill-black hover:scale-110 active:scale-95 border p-1 rounded-full cursor-pointer transition-all`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
      </svg>
      <svg onClick={handleClick} className={`${changeStyle2} w-8 h-8 bg-greenMain border-none stroke-black fill-black hover:scale-110 active:scale-95 border p-1 rounded-full cursor-pointer transition-all`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
        <path d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z" />
      </svg>
    </div>
  )
}