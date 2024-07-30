import React from 'react'
import { PlaySong } from '.'

export const GeneralCard = ({ music }) => {
  return (
    <>
      <article className='flex-col gap-2 p-4 pb-8 bg-[#181818] hover:bg-[#262626] transition-all rounded-lg inline-flex group/item min-h-[280px] h-full text-white'>
        <div className='relative'>
          <img className='h-auto w-full rounded-lg' loading='lazy' src={music.album.albumImg} alt={music.name} />
          <div className='m-3 absolute bottom-0 right-0 scale-150 opacity-0 translate-y-3 duration-300 group/edit group-hover/item:opacity-100 group-hover/item:translate-y-0'>
            <PlaySong song={music} listen={false} />
          </div>
        </div>
        <h3 className='mobileLg:text-xl text-lg font-medium mt-2'>{music.name}</h3>
        <span className='text-white9 text-md mt-auto'>The Strokes</span>
      </article>
    </>
  )
}
