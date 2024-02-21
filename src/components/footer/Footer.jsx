import { contexto } from '../../context/AppContext'
import { PlayBtn, RandomBtn, RepeatBtn, CardSong, LikeBtn } from './components'
import { useContext, useRef} from 'react'
export const Footer = () => {
  const { music, play } = useContext(contexto)
  const ref = useRef()
  if (ref.current) {
    play ? ref.current.play() : ref.current.pause()
  }

  return (
    <footer className='w-full bg-transparent  sticky right-0 bottom-20 tablet:bottom-0 tablet:m-0'>
      <div className='flex tablet:grid grid-cols-10 items-center mx-3 my-2 tablet:mx-0 bg-red9 tablet:bg-black rounded-lg'>
        <article className='flex p-4 gap-4 col-start-1 col-end-4 mobile:w-60'>
          <CardSong />
        </article>
        <main className='flex mx-auto tablet:mx-0 flex-col gap-3 mobile:p-3 col-start-4 col-end-8'>
          <section className='flex items-center gap-5 justify-center'>
            <LikeBtn/>
            <RandomBtn />
            <div className='hidden mobile:block'>
              <svg className='fill-white9 h-6 w-6 hover:fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path d="M267.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160L64 241V96c0-17.7-14.3-32-32-32S0 78.3 0 96V416c0 17.7 14.3 32 32 32s32-14.3 32-32V271l11.5 9.6 192 160z" />
              </svg>
            </div>
            <PlayBtn />
            <div className='hidden mobile:block'>
              <svg className='fill-white9 h-6 w-6 hover:fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path d="M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416V96C0 83.6 7.2 72.3 18.4 67s24.5-3.6 34.1 4.4l192 160L256 241V96c0-17.7 14.3-32 32-32s32 14.3 32 32V416c0 17.7-14.3 32-32 32s-32-14.3-32-32V271l-11.5 9.6-192 160z" />
              </svg>
            </div>
            <RepeatBtn />
          </section>
          <section className='hidden text-white font-extralight text-sm tablet:flex items-center gap-3'>
            <span>time</span>
            <div className='relative flex-1'>
              <div className='absolute bg-white h-1 w-1/3'></div>
              <div className='bg-gray-600 h-1 w-full'></div>
            </div>
            <span>duration</span>
          </section>
        </main>
        <article className='hidden tablet:flex items-center gap-3 justify-center col-start-8 col-end-11'>
          <svg className='w-6 h-6 fill-white9' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
            <path d="M533.6 32.5C598.5 85.2 640 165.8 640 256s-41.5 170.7-106.4 223.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C557.5 398.2 592 331.2 592 256s-34.5-142.2-88.7-186.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM473.1 107c43.2 35.2 70.9 88.9 70.9 149s-27.7 113.8-70.9 149c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C475.3 341.3 496 301.1 496 256s-20.7-85.3-53.2-111.8c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zm-60.5 74.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3z" />
          </svg>
          <div className='flex relative'>
            <div className='w-20 bg-white h-1 flex rounded-3xl'></div>
            <div className='absolute translate-y-[-2px] translate-x-10 w-2 h-2 bg-white9 rounded-full border border-gray-500'></div>
          </div>
          <audio ref={ref} autoPlay src={music.music}></audio>
        </article>

      </div>
    </footer>
  )
}
