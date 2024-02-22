import React, { useContext } from 'react'
import { contexto } from '../../../context/AppContext'
export const CardSong = () => {
  const { music } = useContext(contexto)
  return (
    <>
      <img className='mobileLg:w-16 mobileLg:h-16 rounded w-10 h-10' src={music.album.albumImg} alt={music.album.albumName} />
      <div className='flex flex-col text-white justify-center'>
        <marquee behavior="text-sm scroll" direction="left" scrollamount="3">{music.name}</marquee>
        <span className='font-extralight text-xs mobile:text-sm text-nowrap'>The Strokes</span>
      </div>
    </>
  )
}
