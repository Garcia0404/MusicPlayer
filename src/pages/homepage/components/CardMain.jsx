import React from 'react'
import { albums } from '../../../helper/music/albums'
export const CardMain = () => {
  const music = albums[0]
  console.log(music)
  return (
    <article className='w-full flex gap-3'>
      <img className='w-32 h-32 rounded shadow-xl' src={music.image} alt={music.nombre} />
      <div>
        <span className='text-sm'>Album</span>
        <h1 className='font-bold'>{music.nombre}</h1>
        <span className='text-base'>The Strokes ~ {music.lanzamiento} ~ {music.canciones.length} canciones</span>
      </div>
    </article>
  )
}
