import React, { useEffect } from 'react'
import { useContext, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { contexto } from '../../../context/AppContext'
import { motion } from 'framer-motion'
import { SliderMusic, PlayBtn, RandomBtn, PreviousSong, NextSong, RepeatBtn, LikeBtn } from '/src/components'
import { formatTime } from '../../../utils/formatTime'
import {BackButton} from '../../../components/ui/BackButton'
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
  const { music, play, setSliderTime, setShowFooter, ref } = useContext(contexto)
  const [timeSong, setTimeSong] = useState(0)
  const time = formatTime(timeSong)
  const duration = formatTime(music.duration)

  useEffect(() => {
    if (ref.current) {
      play ? ref.current.play() : ref.current.pause();
    }
  }, [play, music])
  function handleTimeUpdate() {
    setTimeSong(ref.current.currentTime)
  }
  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener('timeupdate', handleTimeUpdate)
      if (duration !== 0) setSliderTime(parseFloat(timeSong * 100 / music.duration))
      return () => {
        ref.current.removeEventListener('timeupdate', handleTimeUpdate)
      }
    }
  })
  useEffect(() => {
    setShowFooter(false)
  }, [])
  return (
    <>
      {
        music.name ? (
          <motion.main
            variants={variants}
            initial="initial"
            animate="enter"
            layout
            style={{ height: "calc(100dvh - 64px)" }}
            className='max-w-[700px] min-h-[350px] lg:max-w-full w-full mobile:mx-auto lg:mx-0 col-start-3 col-end-8 bg-secondary overflow-auto mobileLg:rounded-md z-40 relative'>
            <motion.div className='-z-10 absolute top-0 left-0 w-full h-full' animate={{background:"linear-gradient(#32aac8,transparent)"}}></motion.div>
            <article className='flex justify-center flex-col p-5 text-white max-w-[700px] mx-auto h-full'>
              <BackButton callback={() => {setShowFooter(true)}}/>
              <span className='flex justify-center font-extralight mt-4'>listening to the album</span>
              <h2 className='text-center font-semibold'>{music.album.albumName}</h2>
              <div className='rounded-md overflow-hidden my-8 min-h-[280px] max-w-[450px] max-h-[450px] mx-auto'>
                <img className='mx-auto rounded-md' width='450' height='450' src={music.album.albumImg} alt={music.name} />
              </div>
              <div>
                <div className='flex justify-between items-center'>
                  <div className='flex flex-col'>
                    <span className='text-lg font-semibold'>{music.name}</span>
                    <span className='font-light text-gray-300'>The Strokes</span>
                  </div>
                  <LikeBtn />
                </div>
                <div className='flex flex-col gap-2 mt-4'>
                  <section className='text-white font-extralight text-sm flex items-center gap-2'>
                    <span>{time}</span>
                    <SliderMusic />
                    <span>{duration}</span>
                  </section>
                  <div className='flex items-center justify-center w-40 scale-125 mx-auto mt-2 gap-4'>
                    <RandomBtn />
                    <PreviousSong />
                    <PlayBtn/>
                    <NextSong />
                    <RepeatBtn />
                  </div>
                </div>
              </div>
            </article>
          </motion.main>
        ) : <Navigate to="/" />
      }
    </>

  )
}
