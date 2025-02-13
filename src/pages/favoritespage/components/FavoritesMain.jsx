import { useContext } from 'react'
import { contexto } from '../../../context/AppContext'
import { GeneralCard } from '../../homepage/components'
import { Circle } from '../../../components'
import { AnimatePresence, motion } from 'framer-motion'
export const FavoritesMain = () => {
  const { likeSong } = useContext(contexto)
  return (
    <main className='max-w-[700px] lg:max-w-full w-full mobile:mx-auto lg:mx-0 col-start-3 col-end-8 bg-secondary overflow-auto tablet:rounded-md max-lg:pb-36'>
      <section className='bg-gradient-to-b from-[#4E3899] to-secondary text-white'>
        <div className='w-full flex flex-col mobileLg:flex-row gap-6 mobileLg:items-center px-4 sm:px-6 pt-10'>
          <picture className='mx-auto mobileLg:m-0'>
            <div className='rounded-md bg-gradient-to-br p-14 from-[#4D17F2] to-[#B5D7DA]'>
              <svg className='h-14 w-14 fill-white' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
              </svg>
            </div>
          </picture>
          <div className='flex flex-col justify-center'>
            <span className='text-sm'>Playlist</span>
            <h1 className='font-semibold text-3xl mobileLg:text-5xl'>Your favorites</h1>
            <div className='flex items-center gap-2 mobileLg:mt-3 text-base'>
              <span>The Strokes</span>
              <Circle />
              <span>{likeSong.length}</span>
            </div>
          </div>
        </div>
      </section>
      <motion.ul className='grid mobile:grid-cols-2 mobileLg:grid-cols-mainH gap-3 text-white p-3 sm:p-6 list-none'>
        <AnimatePresence>
          {
            likeSong.map((song, index) => (
              <GeneralCard key={`${song.name}-fav`} music={song} id="favorites"/>
            ))
          }
        </AnimatePresence>
      </motion.ul>
    </main>
  )
}
