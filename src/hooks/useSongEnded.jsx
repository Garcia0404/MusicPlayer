import { useEffect, useState } from 'react'
import { useAppContext } from '../context/AppContext'
import { randomNumber } from '../utils/randomNumber'

export const useSongEnded = (list, callback = () => { }) => {
  const { setMusic, random, music, recent } = useAppContext()
// const [recents, setRecents] = useState(recent?.filter((_, index) => index !== 0))
  const handleLastSong = () => {
    if (list?.length > 0) {
      const indexSong = list.findIndex(song => song.name === music.name)
      if (indexSong != 0) {
        setMusic(list[indexSong - 1])
      } else {
        setMusic(list[list.length - 1])
      }
    }
  }
  const handleSongEnded = () => {
    // setRecents(prev => {
    //   const indx = prev.findIndex(item => item.name === recent[0].name)
    //   if (indx === -1) return [recent[0], ...prev]
    //   prev.splice(indx, 1)
    //   return [recent[0], ...prev]
    // })
    callback()
    if (list?.length > 0) {
      if (!random) {
        const indexSong = list.findIndex(song => song.name === music.name)
        if (indexSong < list.length - 1) {
          setMusic(list[indexSong + 1])
        } else {
          setMusic(list[0])
        }
      } else {
        const randomSong = list[randomNumber(list.length)]
        setMusic(randomSong)
      }
    }
  }

  return {
    handleSongEnded,
    handleLastSong
  }
}