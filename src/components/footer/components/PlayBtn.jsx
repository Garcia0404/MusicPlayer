import { useContext } from 'react'
import { contexto } from '../../../context/AppContext'
export const PlayBtn = () => {
  const { play, setPlay,music } = useContext(contexto)
  function change() {
    setPlay(!play)
  }
  
  const changeStyle1 = play ? 'hidden' : 'block'
  const changeStyle2 = play ? 'block' : 'hidden'
  if(music.name){
  return (
    <div>
      <svg onClick={change} className={`${changeStyle1} w-8 h-8 bg-white  fill-black hover:scale-110 active:scale-95 border p-1 rounded-full cursor-pointer transition-all`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
      </svg>
      <svg onClick={change} className={`${changeStyle2} w-8 h-8 bg-white fill-black hover:scale-110 active:scale-95 border p-1 rounded-full cursor-pointer transition-all`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
        <path d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z" />
      </svg>
    </div>
  )
  }else{
    return (
      <svg className={`${changeStyle1} w-8 h-8 bg-white  fill-black hover:scale-110 active:scale-95 border p-1 rounded-full cursor-pointer transition-all`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
      </svg>
    )
  }
}
