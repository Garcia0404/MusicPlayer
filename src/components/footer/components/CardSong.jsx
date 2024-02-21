import React, { useContext } from 'react'
import { contexto } from '../../../context/AppContext'
export const CardSong = () => {
  const { music } = useContext(contexto)
  return (
    <>
      <img className='mobile:w-16 mobile:h-16 rounded w-12 h-12' src={music.album.albumImg} alt={music.album.albumName} />
      <div className='flex flex-col text-white justify-center'>
        <marquee behavior="text-sm scroll" direction="left" scrollamount="3">{music.name}</marquee>
        <span className='font-extralight text-sm'>The Strokes</span>
      </div>
    </>
  )
}
