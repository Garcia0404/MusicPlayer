import React, { useContext } from 'react'
import { contexto } from '/src/context/AppContext'
import { LikeBtn } from '.'
import { useNavigate } from 'react-router-dom'
import { useResponsiveAction } from '../../../hooks/useResponsiveAction'

export const CardSong = () => {
  const { music, setShowFooter } = useContext(contexto)
  const navigate = useNavigate()
  const handleNavigate = (width) => {
    if (width <= 609) {
      navigate(`/albums/${music.album.albumName.replace(/\s+/g, '')}/${music.name.replace(/\s+/g, '')}`);
      setShowFooter(false)
    }
  }
  const { width } = useResponsiveAction()
  return (
    <>
      <article className='flex items-center gap-3 col-start-1 col-end-4 max-[609px]:cursor-pointer'>
        <div
          className='flex items-center gap-3'
          onClick={()=>{handleNavigate(width)}}>
          <img className='mobileLg:w-14 mobileLg:h-14 rounded w-10 h-10' src={music?.album?.albumImg} alt={music?.album?.albumName} />
          <div className='flex flex-col text-white justify-center w-20 gap-1 overflow-hidden'>
            <div className='text-sm animate-marquee overflow-hidden whitespace-nowrap w-max'>{music.name}</div>
            <span className='font-extralight text-xs text-nowrap'>The Strokes</span>
          </div>
        </div>
        <LikeBtn />
      </article>
    </>
  )
}
