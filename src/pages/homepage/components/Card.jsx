import React from 'react'
import { PlaySong } from '.'

export const Card = ({song,listen}) => {
  return (
    <article className='bg-[#232526] hover:bg-grayHoverMain transition-all flex rounded-[4px] gap-2 pe-2 cursor-pointer overflow-hidden group/item'>
      <img className='w-14 h-14' src={song.album.albumImg} alt={song.name} />
      <div className='flex items-center text-xs font-semibold'>{song.name}</div>
      <div className='flex items-center ms-auto group/edit invisible group-hover/item:visible'>
        <PlaySong song={song} listen={listen} />
      </div>
    </article>
  )
}
