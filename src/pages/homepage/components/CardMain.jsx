import React from 'react'
import { Circle } from '../../../components'
export const CardMain = (albumid) => {
  return (
    <article className='w-full flex flex-col mobileLg:flex-row gap-6 mobileLg:items-center'>
      <div className='mobileLg:w-auto'>
        <img className='w-40 h-40 mx-auto rounded shadow-xl' src={albumid.image} alt={albumid.nombre} />
      </div>
      <div className='overflow-hidden'>
        <span className='text-sm'>Album</span>
        <h1 className='font-bold text-balance'>{albumid.nombre}</h1>
        <div className='flex text-base font-light gap-2 items-center'>
          <span>The Strokes</span>
          <Circle/>
          <span>{albumid.año}</span>
          <Circle/>
          <span>{albumid.canciones.length} songs</span>
        </div>
      </div>
    </article>
  )
}
