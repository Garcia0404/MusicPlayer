import React from 'react'

export const CardAlbum = (album) => {
  return (
    <article className='hover:bg-grayMain flex rounded-md p-2 gap-3 cursor-pointer'>
      <img className='h-12 w-12 rounded-md' src={album.image} alt={album.nombre} />
      <main className='overflow-hidden'>
        <h1 className='text-white text-md text-nowrap'>{album.nombre}</h1>
        <div className='text-white9'>
          <span>Album - </span>
          <span> The Strokes</span>
        </div>
      </main>
    </article>
  )
}
