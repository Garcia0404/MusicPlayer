import { useAppContext } from '../context/AppContext'
import { randomNumber } from '../utils/randomNumber'

export const useSongEnded = (list, callback = () => { }) => {
  const { setMusic, random, music } = useAppContext()

  function handleSongEnded() {
    callback()
    if (list?.length > 0) {
      if (!random) {
        const index = list.findIndex(song => song.name === music.name)
        if (index < list.length - 1) {
          setMusic(list[index + 1])
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
    handleSongEnded
  }
}