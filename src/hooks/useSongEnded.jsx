import { useContext } from "react"
import { randomNumber } from "../utils/randomNumber"
import { contexto } from "../context/AppContext"
export const useSongEnded = (callback=()=>{}) => {
  const { setMusic, random, data } = useContext(contexto)
  function handleSongEnded() {
    callback()
    if (!random) {
      const album = localStorage.getItem('album')
      const song = localStorage.getItem('song')
      if (album && song) {
        const al = data.find(a => a.nombre == album)
        const indexAl = data.findIndex(a => a.nombre == album)
        const index = al.canciones.findIndex((m) => m.name == song)
        if (index < al.canciones.length - 1) {
          setMusic(al.canciones[index + 1])
        } else {
          if (indexAl + 1 < data.length) {
            setMusic(data[indexAl + 1].canciones[0])
          } else setMusic(data[0].canciones[0])
        }
      }
    } else {
      let n = data[randomNumber(6)]
      const length = n.canciones.length
      n = n.canciones[randomNumber(length)]
      setMusic(n)
    }
  }
  return {
    handleSongEnded
  }
}