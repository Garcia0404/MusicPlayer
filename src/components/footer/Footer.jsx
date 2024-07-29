import { contexto } from '../../context/AppContext'
import { PlayBtn, RandomBtn, RepeatBtn, CardSong, Slider, SliderMusic, MuteBtn, NextSong, PreviousSong,LikeBtn } from './components'
import { useContext, useState, useEffect } from 'react'
import { albums } from '../../helper/music/albums'
import { motion } from 'framer-motion'
import { variants } from '../../variants/variants'
import { formatTime } from './functions'
export const Footer = () => {
  const { music, setMusic, play, volume, setSliderTime, repeat, random, showFooter, ref } = useContext(contexto)
  const [timeSong, setTimeSong] = useState(0)
  const [durationSong, setDurationSong] = useState(0)
  const style = showFooter ? 'block' : 'hidden'

  const time = formatTime(timeSong)
  const duration = formatTime(durationSong)

  useEffect(() => {
    if (ref.current) {
      ref.current.loop = repeat
    }
  }, [repeat])

  useEffect(() => {
    if (ref.current) {
      play ? ref.current.play() : ref.current.pause();
    }
  }, [play, music])
  useEffect(() => {
    if (ref.current) ref.current.volume = volume / 100;
  }, [volume])

  useEffect(() => {
    if (ref.current && music.name) {
      function handleTimeUpdate() {
        if (ref.current) setTimeSong(ref.current.currentTime)
      }
      function handleLoadedM() {
        if (ref.current) setDurationSong(ref.current.duration)
      }
      ref.current.addEventListener('timeupdate', handleTimeUpdate)
      ref.current.addEventListener('loadedmetadata', handleLoadedM)
      if (durationSong !== 0) setSliderTime(parseFloat(timeSong * 100 / durationSong))
      return () => {
        if (ref.current) {
          ref.current.removeEventListener('timeupdate', handleTimeUpdate)
          ref.current.removeEventListener('loadedmetadata', handleLoadedM)
        }
      }
    }
  })

  function handleSongEnded() {
    if (!random) {
      const album = localStorage.getItem('album')
      const song = localStorage.getItem('song')
      if (album && song) {
        const al = albums.find(a => a.nombre == album)
        const indexAl = albums.findIndex(a => a.nombre == album)
        const index = al.canciones.findIndex((m) => m.name == song)
        if (index < al.canciones.length - 1) {
          setMusic(al.canciones[index + 1])
        } else {
          if (indexAl + 1 < albums.length) {
            setMusic(albums[indexAl + 1].canciones[0])
          } else setMusic(albums[0].canciones[0])
        }
      }
    } else {
      let n = albums[randomNumber(6)]
      const length = n.canciones.length
      n = n.canciones[randomNumber(length)]
      setMusic(n)
    }
  }
  function randomNumber(n) {
    const number = Math.floor(Math.random() * n)
    return number
  }
  return (
    <>
      {
        music.name && (
          <motion.footer
            variants={variants}
            initial="initial"
            animate="enter"
            className={`${style} w-full bg-transparent sticky right-0 bottom-20 tablet:bottom-0 tablet:m-0 z-10`}
          >
            <div className='flex tablet:grid grid-cols-10 items-center tablet:mx-0 bg-red9 tablet:bg-black rounded-lg p-4 mx-2'>
              <CardSong />
              <main className='flex ms-auto tablet:mx-0 flex-col gap-1 col-start-4 col-end-8'>
                <section className='flex items-center gap-3 mobileLg:gap-4 justify-center'>
                  <span className='hidden mobileLg:block'>
                    <RandomBtn />
                  </span>
                  <span className='hidden mobileLg:block'>
                    <PreviousSong />
                  </span>
                  <PlayBtn />
                  <NextSong />
                  <span className='hidden mobileLg:block '>
                    <RepeatBtn />
                  </span>
                </section>
                <section className='hidden text-white font-extralight text-sm tablet:flex items-center gap-2'>
                  <span>{time}</span>
                  <SliderMusic/>
                  <span>{duration}</span>
                </section>
              </main>
              <article className='hidden tablet:flex items-center gap-3 justify-center col-start-8 col-end-11'>
                <MuteBtn />
                <Slider />
                <audio onEnded={handleSongEnded} ref={ref} autoPlay src={music.music}></audio>
              </article>
            </div>
          </motion.footer>
        )
      }
    </>

  )
}
