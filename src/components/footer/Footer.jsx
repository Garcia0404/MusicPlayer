import { contexto } from '../../context/AppContext'
import { PlayBtn, RandomBtn, RepeatBtn, CardSong, Slider, SliderMusic, MuteBtn, NextSong, PreviousSong } from './components'
import { useContext, useRef, useState, useEffect } from 'react'
import { albums } from '../../helper/music/albums'
export const Footer = () => {
  const { music, setMusic, play, volume, setSliderTime, repeat } = useContext(contexto)
  const [timeSong, setTimeSong] = useState(0)
  const [durationSong, setDurationSong] = useState(0)
  const ref = useRef()

  const time = formatTime(timeSong)
  const duration = formatTime(durationSong)

  useEffect(() => {
    if (repeat) {
      ref.current.loop = true
    } else {
      ref.current.loop = false
    }
  }, [repeat])

  useEffect(() => {
    play ? ref.current.play() : ref.current.pause();
  }, [play, music])
  useEffect(() => {
    ref.current.volume = volume / 100;
  }, [volume])
  useEffect(() => {
    if (music.name) {
      ref.current.addEventListener('timeupdate', handleTimeUpdate)
      ref.current.addEventListener('loadedmetadata', handleLoadedM)
      if (durationSong !== 0) setSliderTime(parseFloat(timeSong * 100 / durationSong))
      return () => {
        ref.current.removeEventListener('timeupdate', handleTimeUpdate)
        ref.current.removeEventListener('loadedmetadata', handleLoadedM)
      }
    }
  })

  function formatTime(time) {
    const seconds = Math.floor(time % 60)
    const minutes = Math.floor(time / 60)
    const cero = (seconds < 10) ? 0 : ''
    const timeCorrect = minutes + ':' + cero + seconds
    return timeCorrect
  }
  function handleSongEnded() {
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
  }

  function handleTimeUpdate() {
    if (ref.current) setTimeSong(ref.current.currentTime)
  }
  function handleLoadedM() {
    if (ref.current) setDurationSong(ref.current.duration)
  }
  function handleTime(e) {
    ref.current.currentTime = parseFloat(e.target.value * durationSong / 100)
  }
  return (
    <footer className='w-full bg-transparent sticky right-0 bottom-20 tablet:bottom-0 tablet:m-0'>
      <div className='flex tablet:grid grid-cols-10 items-center tablet:mx-0 bg-red9 tablet:bg-black rounded-lg p-4 mx-2'>
        <article className='flex items-center gap-3 col-start-1 col-end-4'>
          <CardSong />
        </article>
        <main className='flex ms-auto tablet:mx-0 flex-col gap-1 col-start-4 col-end-8'>
          <section className='flex items-center gap-3 mobileLg:gap-4 justify-center'>
            <RandomBtn />
            <PreviousSong />
            <PlayBtn />
            <NextSong />
            <RepeatBtn />
          </section>
          <section className='hidden text-white font-extralight text-sm tablet:flex items-center gap-2'>
            <span>{time}</span>
            <SliderMusic handle={handleTime} />
            <span>{duration}</span>
          </section>
        </main>
        <article className='hidden tablet:flex items-center gap-3 justify-center col-start-8 col-end-11'>
          <MuteBtn />
          <Slider />
          <audio onEnded={handleSongEnded} ref={ref} autoPlay src={music.music}></audio>
        </article>

      </div>
    </footer>
  )
}
