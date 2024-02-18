import React from 'react'
export const CardMain = (albumid) => {
  return (
    <article className='w-full flex gap-3'>
      <img className='w-32 h-32 rounded shadow-xl' src={albumid.image} alt={albumid.nombre} />
      <div>
        <span className='text-sm'>Album</span>
        <h1 className='font-bold'>{albumid.nombre}</h1>
        <span className='text-base'>The Strokes ~ {albumid.lanzamiento} ~ {albumid.canciones.length} canciones</span>
      </div>
    </article>
  )
}
