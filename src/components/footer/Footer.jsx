import { contexto } from '../../context/AppContext'
import { PlayBtn, RandomBtn, RepeatBtn, CardSong, Slider, SliderMusic, MuteBtn,NextSong } from './components'
import { useContext, useRef, useState, useEffect } from 'react'
import { albums } from '../../helper/music/albums'
export const Footer = () => {
  const { music, play, volume, setSliderTime } = useContext(contexto)
  const [timeSong, setTimeSong] = useState(0)
  const [durationSong, setDurationSong] = useState(0)
  const ref = useRef()

  const time = formatTime(timeSong)
  const duration = formatTime(durationSong)

  useEffect(() => {
      play ? ref.current.play() : ref.current.pause();
  }, [play,music])
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
            <div className='hidden mobileLg:block'>
              <svg className='fill-white9 h-5 w-5 hover:fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path d="M267.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160L64 241V96c0-17.7-14.3-32-32-32S0 78.3 0 96V416c0 17.7 14.3 32 32 32s32-14.3 32-32V271l11.5 9.6 192 160z" />
              </svg>
            </div>
            <PlayBtn />
            <NextSong/>
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
          <audio ref={ref} autoPlay src={music.music}></audio>
        </article>

      </div>
    </footer>
  )
}
