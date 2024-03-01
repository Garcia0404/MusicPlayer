import React from 'react'
import { PlaySong } from '.'

export const Card = (song) => {
  return (
    <article className='bg-[#232526] hover:bg-grayHoverMain flex rounded-[4px] gap-2 pe-2 cursor-pointer overflow-hidden'>
      <img className='w-14 h-14' src={song.album.albumImg} alt={song.name} />
      <div className='flex items-center text-xs mobileLg:text-sm font-semibold'>{song.name}</div>
      <div className='flex items-center ms-auto'>
        <PlaySong {...song} />
      </div>
    </article>
  )
}
