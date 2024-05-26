import React, { useEffect } from 'react'
import { useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { contexto } from '../../../context/AppContext'
import { motion } from 'framer-motion'

const variants = {
  initial: {
    opacity: 0
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 0.3,
    }
  }
}
export const CardSong = () => {
  const songname = useParams().nameSong
  const navigate = useNavigate()
  const { music, setShowFooter } = useContext(contexto)
  useEffect(() => {
    setShowFooter(false)
  }, [])
  return (
    <>
      {
        music.name && (
          <motion.main
            variants={variants}
            initial="initial"
            animate="enter"
            className='max-w-[700px] lg:max-w-full w-full mobile:mx-auto lg:mx-0 col-start-3 col-end-8 bg-secondary overflow-auto mobileLg:rounded-md z-40 relative'>
            <article className='p-6 text-white'>
              <svg className="size-6 stroke-white absolute top-0 left-0 m-4" onClick={() => { setShowFooter(true); navigate('/') }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
              </svg>
              <span className='flex justify-center font-extralight'>listening to the album</span>
              <h2 className='text-center font-semibold'>{music.album.albumName}</h2>
              <div className='rounded-md overflow-hidden my-8'>
                <img className='mx-auto rounded-md' src={music.album.albumImg} alt={music.name} />
              </div>
              <div>
                <div className='flex flex-col'>
                  <span className='text-lg font-semibold'>{music.name}</span>
                  <span className='font-light text-gray-300'>The Strokes</span>
                </div>
              </div>
            </article>
          </motion.main>
        )
      }
    </>

  )
}
