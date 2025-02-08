import { useRef, useState } from 'react'
import music from '../../../music/theStrokes/2.mp3'
export const HomePage = () => {
  const [ play,setPlay ] = useState(false)
  const audioRef = useRef()
  function handleClick() {
    if(!play){
    audioRef.current.play()
    setPlay(true)
    }else{
      audioRef.current.pause()
      setPlay(false)
    }
  }
  return (
    <div>
      <h1>musica</h1>
      <audio src={music} ref={audioRef}></audio>
      <button onClick={handleClick}>x</button>
    </div>
  )
}
