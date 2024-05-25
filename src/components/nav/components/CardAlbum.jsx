import React, { useState } from 'react'
import { CardAlbumLoading } from '.'
export const CardAlbum = (album) => {
  const [state,setState] = useState(false)
  const style = state? 'flex opacity-1':'hidden opacity-0'
  return (
    <>
      <article className={`hover:bg-grayMain ${style} rounded-md p-2 gap-3 cursor-pointer`}>
        <img onLoad={() => setState(true)} className='h-12 w-12 rounded-md' src={album.image} alt={album.nombre} />
        <main className='overflow-hidden'>
          <h1 className='text-white text-md text-nowrap'>{album.nombre}</h1>
          <div className='text-white9'>
            <span>Album - </span>
            <span> The Strokes</span>
          </div>
        </main>
      </article>
      <CardAlbumLoading loading={!state}/>
    </>
  )
}
