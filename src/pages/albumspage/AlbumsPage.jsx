import { CardAlbum } from '../../components'
import { useContext, useRef, useState } from 'react'
import { contexto } from '../../context/AppContext'
import { motion, useScroll, useTransform } from 'framer-motion'
export const AlbumsPage = () => {
  const ref = useRef()
  const { scrollY } = useScroll({ container: ref })
  const opacity = useTransform(scrollY, [0, 100], [0, 1])
  
  const { data } = useContext(contexto)
  const [isLoaded, setIsLoaded] = useState(false)
  return (
    <div ref={ref} className='max-w-[700px] lg:max-w-full w-full mobile:mx-auto lg:mx-0 col-start-3 col-end-8 bg-secondary overflow-auto tablet:rounded-md border-white'>
      <header className='relative w-full flex items-center justify-between flex-col bg-black'>
        <img onLoad={() => setIsLoaded(true)} className='hidden' src="/img/the-strokes.webp" alt="background-theStrokes" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className='h-[280px] max-w-[900px] bg-center w-full overflow-hidden bg-cover' 
          style={{ backgroundImage: "url(/img/the-strokes.webp)"}}>
        </motion.div>
        <motion.div style={{ opacity }} className='absolute top-0 left-0 w-full h-full bg-[#63000]'></motion.div>
        <h1 className='absolute bottom-10 left-0 text-white text-5xl mobileLg:text-7xl tablet:text-8xl font-bold p-5'>The Strokes</h1>
      </header>
      <main className='relative flex flex-col gap-3 pt-8 px-3 sm:px-4 pb-40 lg:pb-4 text-white overflow-auto'>
        <div className='absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-[#603000]'></div>
        <h2 className='text-white text-3xl font-medium z-10'>Albums</h2>
        <ul className='z-10'>
          {
            data.map((album) => (
              <CardAlbum  {...album} key={`album-${album.nombre}`} layout />
            ))
          }
        </ul>
      </main>
    </div>

  )
}
