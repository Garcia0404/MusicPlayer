import React, { useContext } from 'react'
import { contexto } from '../../../context/AppContext'
export const CardSong = () => {
  const { music } = useContext(contexto)
  return (
    <>
      <img className='w-16 h-16 rounded' src={music.album.albumImg} alt={music.album.albumName} />
      <div className='flex flex-col text-white justify-center'>
        <h1 className='text-sm'>{music.name}</h1>
        <span className='font-extralight text-sm'>The Strokes</span>
      </div>
    </>
  )
}
