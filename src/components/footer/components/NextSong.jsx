import React, { useContext } from 'react'
import { albums } from '../../../helper/music/albums'
import { contexto } from '../../../context/AppContext'
export const NextSong = () => {
  const { music } = useContext(contexto)
  function nextSong(){
    const album = music.album.albumName
    const al = albums.find(a=>a.nombre==album)
    return console.log(al.canciones)
  }

  return (
    <div onClick={nextSong}>
      <svg className='fill-white9 h-5 w-5 hover:fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
        <path d="M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416V96C0 83.6 7.2 72.3 18.4 67s24.5-3.6 34.1 4.4l192 160L256 241V96c0-17.7 14.3-32 32-32s32 14.3 32 32V416c0 17.7-14.3 32-32 32s-32-14.3-32-32V271l-11.5 9.6-192 160z" />
      </svg>
    </div>
  )
}
