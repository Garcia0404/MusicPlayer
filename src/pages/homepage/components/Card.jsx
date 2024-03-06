import React from 'react'
import { PlaySong } from '.'

export const Card = ({song,listen}) => {
  return (
    <article className='relative bg-[#232526] hover:bg-grayHoverMain transition-all flex rounded-[4px] gap-2 pe-2 cursor-pointer overflow-hidden group/item'>
      <img className='w-14 h-full' src={song.album.albumImg} alt={song.name} />
      <div className='flex items-center p-1 overflow-hidden'>
        <span className='text-xs font-semibold text-nowrap'>{song.name}</span>
      </div>
      <div className='absolute top-3 left-3 mobileLg:static flex items-center ms-auto group/edit invisible group-hover/item:visible'>
        <PlaySong song={song} listen={listen} />
      </div>
    </article>
  )
}
