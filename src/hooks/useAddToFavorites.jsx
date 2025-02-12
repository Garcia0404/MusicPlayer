import { useContext, useState, useEffect } from 'react'
import { contexto } from '../context/AppContext'
export const useAddToFavorites = () => {
  const { music, likeSong, setLikeSong } = useContext(contexto)
  const [likeMusic, setLikeMusic] = useState(false)
  // checking if the song is in favorites
  const likedSong = likeSong.find((song) => song.name == music.name)
  useEffect(
    () => {
      if (likedSong) {
        setLikeMusic(true)
      } else {
        setLikeMusic(false)
      }
    }, [music, likeSong]
  )
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(likeSong))
  }, [likeSong])
  function handleClick() {
    if (likedSong) {
      setLikeSong(likeSong.filter((song) => song.name != music.name))
      setLikeMusic(false)
    } else {
      setLikeSong([music, ...likeSong])
      setLikeMusic(true)
    }
  }
  return {
    likeMusic, handleClick
  }
}
