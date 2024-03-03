import React from 'react'
import { PlaySong } from '.'

export const GeneralCard = (music) => {
  return (
    <article className='flex-col gap-2 p-4 pb-8 bg-[#181818] hover:bg-[#262626] transition-all rounded-lg inline-flex'>
      <img className='h-52 w-52 rounded-lg' src={music.album.albumImg} alt={music.name} />
      <h3 className='text-xl font-medium'>{music.name}</h3>
      <span className='text-white9 text-md'>The Strokes</span>
      
    </article>
  )
}
