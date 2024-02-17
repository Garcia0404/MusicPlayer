import React from 'react'
import { PlayBtn, RandomBtn, RepeatBtn } from './components'

export const Footer = () => {
  return (
    <footer className='bg-black'>
      <article>

      </article>
      <main className='flex justify-center'>
        <section className='p-4 flex items-center gap-5'>
          <RandomBtn />
          <div>
            <svg className='fill-white9 h-6 w-6 hover:fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <path d="M267.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160L64 241V96c0-17.7-14.3-32-32-32S0 78.3 0 96V416c0 17.7 14.3 32 32 32s32-14.3 32-32V271l11.5 9.6 192 160z" />
            </svg>
          </div>
          <PlayBtn />
          <div>
            <svg className='fill-white9 h-6 w-6 hover:fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <path d="M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416V96C0 83.6 7.2 72.3 18.4 67s24.5-3.6 34.1 4.4l192 160L256 241V96c0-17.7 14.3-32 32-32s32 14.3 32 32V416c0 17.7-14.3 32-32 32s-32-14.3-32-32V271l-11.5 9.6-192 160z" />
            </svg>
          </div>
          <RepeatBtn/>
        </section>
        <section>
          
        </section>
      </main>

    </footer>
  )
}
