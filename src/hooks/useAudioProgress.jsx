import { useContext, useEffect } from "react"
import { contexto } from "../context/AppContext"
import { formatTime } from "../utils/formatTime"
export const useAudioProgress = () => {
  const { music, setSliderTime, ref, setMusicTime, musicTime} = useContext(contexto)
  const duration = formatTime(music.duration)
  const time = formatTime(musicTime)
  function handleTimeUpdate() {
    if (ref.current) setMusicTime(ref.current.currentTime)
  }
  useEffect(() => {
    if (ref.current && music.name) {
      ref.current.addEventListener('timeupdate', handleTimeUpdate)
      if (duration !== 0) setSliderTime(parseFloat(musicTime * 100 / music.duration))
      return () => {
        if (ref.current) {
          ref.current.removeEventListener('timeupdate', handleTimeUpdate)
        }
      }
    }
  }, [ref?.current?.currentTime, music])
  return {
    time
  }
}
