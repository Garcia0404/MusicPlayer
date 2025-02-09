import { contexto } from '../../context/AppContext'
import { PlayBtn, RandomBtn, RepeatBtn, CardSong, Slider, SliderMusic, MuteBtn, NextSong, PreviousSong } from './components'
import { useContext } from 'react'
import { motion } from 'framer-motion'
import { variants } from '../../variants/variants'
import { formatTime } from "../../utils/formatTime"
import { useAudioProgress } from '../../hooks/useAudioProgress'
import { useSongEnded } from '../../hooks/useSongEnded'
export const Footer = () => {
  const { music, showFooter, ref } = useContext(contexto)
  const style = showFooter ? 'block' : 'hidden'
  const duration = formatTime(music.duration)
  const { time } = useAudioProgress()
  const { handleSongEnded } = useSongEnded()
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
            <div className='flex tablet:justify-between items-center tablet:mx-0 bg-red9 tablet:bg-black rounded-lg p-3 gap-4 mx-2'>
              <CardSong />
              <main className='flex tablet:items-center flex-grow tablet:mx-0 flex-col gap-1 col-start-4 col-end-8'>
                <section className='max-mobileLg:ms-auto flex items-center gap-3 mobileLg:gap-4 justify-center'>
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
                <section className='hidden text-white font-extralight text-sm tablet:flex items-center gap-2 max-w-3xl tablet:w-full'>
                  <span>{time}</span>
                  <SliderMusic />
                  <span>{duration}</span>
                </section>
              </main>
              <div className='hidden tablet:flex items-center gap-3 me-4 justify-end col-start-8 col-end-11'>
                <MuteBtn />
                <Slider />
                <audio onEnded={handleSongEnded} ref={ref} src={music.music}></audio>
              </div>
            </div>
          </motion.footer>
        )
      }
    </>

  )
}
