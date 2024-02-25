import { contexto } from '../../context/AppContext'
import { PlayBtn, RandomBtn, RepeatBtn, CardSong, LikeBtn,Slider,MuteBtn,SliderMusic } from './components'
import { useContext, useRef, useState,useEffect} from 'react'
export const Footer = () => {
  const { music, play,volume,musicTime,setMusicTime } = useContext(contexto)
  const [ duration,setDuration ] = useState(0)
  const ref = useRef()
  useEffect(() => {
    if (ref.current) {
      play ? ref.current.play() : ref.current.pause();
      ref.current.volume = volume / 100;
      
      const handleLoadedMetadata = () => {
        const time = (ref.current.duration / 60).toFixed(2);
        setDuration(time);
      };
  
      ref.current.addEventListener('loadedmetadata', handleLoadedMetadata);
  
      return () => {
        ref.current.removeEventListener('loadedmetadata', handleLoadedMetadata);
      };
    }
  }, [play, volume]);
  console.log(musicTime)
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
            <div className='hidden mobileLg:block'>
              <svg className='fill-white9 h-5 w-5 hover:fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path d="M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416V96C0 83.6 7.2 72.3 18.4 67s24.5-3.6 34.1 4.4l192 160L256 241V96c0-17.7 14.3-32 32-32s32 14.3 32 32V416c0 17.7-14.3 32-32 32s-32-14.3-32-32V271l-11.5 9.6-192 160z" />
              </svg>
            </div>
            <RepeatBtn />
          </section>
          <section className='hidden text-white font-extralight text-sm tablet:flex items-center gap-3'>
            <span>time</span>
            <SliderMusic/>
            <span>{duration}</span>
          </section>
        </main>
        <article className='hidden tablet:flex items-center gap-3 justify-center col-start-8 col-end-11'>
          <MuteBtn/>
          <Slider/>
          <audio ref={ref} autoPlay src={music.music}></audio>
        </article>

      </div>
    </footer>
  )
}
