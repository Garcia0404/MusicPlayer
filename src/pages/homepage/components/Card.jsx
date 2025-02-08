import React from 'react'
import { PlaySong } from '.'

export const Card = ({ song, listen }) => {
  return (
    <>
      <article className='relative bg-[#232526] hover:bg-grayHoverMain transition-all flex rounded-md gap-2 pe-2 cursor-pointer overflow-hidden group/item'>
        <img className='flex w-14 h-full' src={song.album.albumImg} alt={song.name} />
        <div className='flex items-center flex-1 ms-1 me-2 overflow-hidden'>
          <span className='text-xs font-semibold whitespace-nowrap overflow-hidden text-ellipsis'>{song.name}</span>
        </div>
        <div className='absolute top-3 left-3 flex items-center ms-auto group/edit invisible opacity-0 duration-200 group-hover/item:opacity-100 group-hover/item:visible'>
          <PlaySong song={song} listen={listen} />
        </div>
      </article>
    </>

  )
}
