import React, { useContext } from 'react'
import { contexto } from '../../../context/AppContext'
export const NextSong = () => {
  const { music, setMusic, setPlay,random,data } = useContext(contexto)
  function nextSong() {
    if(!random){
    const album = music.album.albumName
    const al = data.find(a => a.nombre == album)
    const indexAl = data.findIndex(i => i.nombre == album)
    const index = al.canciones.findIndex(a => a.name == music.name)
    if (index < al.canciones.length - 1) {
      setMusic(al.canciones[index + 1])
      setPlay(true)
    } else {
      if (indexAl + 1 < data.length) {
        setMusic(data[indexAl + 1].canciones[0])
        setPlay(true)
      } else return
    }}else{
      function randomNumber(n){
        const number = Math.floor(Math.random()*n)
        return number
      }
      let n = data[randomNumber(6)]
      const length = n.canciones.length
      n = n.canciones[randomNumber(length)]
      setMusic(n)
      setPlay(true)
    }
  }

  return (
    <div onClick={nextSong}>
      <svg className='fill-white9 h-5 w-5 hover:fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
        <path d="M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416V96C0 83.6 7.2 72.3 18.4 67s24.5-3.6 34.1 4.4l192 160L256 241V96c0-17.7 14.3-32 32-32s32 14.3 32 32V416c0 17.7-14.3 32-32 32s-32-14.3-32-32V271l-11.5 9.6-192 160z" />
      </svg>
    </div>
  )
}
