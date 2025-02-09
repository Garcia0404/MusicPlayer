import { useContext,useState,useEffect } from 'react'
import { contexto } from '../../../context/AppContext'
export const LikeBtn = () => {
  const { music, likeSong, setLikeSong } = useContext(contexto)
  const [likeMusic, setLikeMusic] = useState(false)
  const style = likeMusic ? 'fill-greenMain stroke-greenMain' : 'fill-none stroke-white'
  const eq = likeSong.find((song) => song.name == music.name)

  useEffect(
    () => {
      if (eq) {
        setLikeMusic(true)
      } else {
        setLikeMusic(false)
      }
    }, [music,likeSong]
  )
  function handleClick() {
    if (eq) {
      setLikeSong(likeSong.filter((song) => song.name != music.name))
      setLikeMusic(false)
    } else {
      setLikeSong([music,...likeSong])
      setLikeMusic(true)
    }
  }
  return (
    <svg onClick={handleClick} className={`w-6 h-6 ${style} cursor-pointer hover:stroke-greenMain active:scale-50 transition-all`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
    </svg>
  )
}
