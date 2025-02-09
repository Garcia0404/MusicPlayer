import React, { useEffect } from 'react'
import { useContext, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { contexto } from '../../../context/AppContext'
import { motion } from 'framer-motion'
import { SliderMusic, PlayBtn, RandomBtn, PreviousSong, NextSong, RepeatBtn, LikeBtn } from '/src/components'
import { formatTime } from '../../../utils/formatTime'

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
  const { music, play, setSliderTime, setShowFooter, ref } = useContext(contexto)
  const [timeSong, setTimeSong] = useState(0)
  const [durationSong, setDurationSong] = useState(0)
  const time = formatTime(timeSong)
  const duration = formatTime(durationSong)

  useEffect(() => {
    if (ref.current) {
      play ? ref.current.play() : ref.current.pause();
    }
  }, [play, music])

  useEffect(() => {
    if (ref.current) {
      function handleTimeUpdate() {
        setTimeSong(ref.current.currentTime)
      }
      function handleLoadedM() {
        setDurationSong(ref.current.duration)
      }
      ref.current.addEventListener('timeupdate', handleTimeUpdate)
      ref.current.addEventListener('loadedmetadata', handleLoadedM)
      if (durationSong !== 0) setSliderTime(parseFloat(timeSong * 100 / durationSong))
      return () => {
        ref.current.removeEventListener('timeupdate', handleTimeUpdate)
        ref.current.removeEventListener('loadedmetadata', handleLoadedM)
      }
    }
  })


  function handleTime(e) {
    if (ref.current) ref.current.currentTime = parseFloat(e.target.value * durationSong / 100)
  }
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
            style={{ height: "calc(100dvh - 64px)" }}
            className='max-w-[700px] min-h-[350px] lg:max-w-full w-full mobile:mx-auto lg:mx-0 col-start-3 col-end-8 bg-secondary overflow-auto mobileLg:rounded-md z-40 relative'>
            <motion.div className='-z-10 absolute top-0 left-0 w-full h-full' animate={{background:"linear-gradient(#32aac8,transparent)"}}></motion.div>
            <article className='flex justify-center flex-col p-5 text-white max-w-[700px] mx-auto h-full'>
              <svg className="size-6 stroke-white absolute top-0 left-0 m-4 cursor-pointer" onClick={() => { setShowFooter(true); navigate(-1) }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
              </svg>
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
                    <SliderMusic handle={handleTime} />
                    <span>{music.duration}</span>
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
