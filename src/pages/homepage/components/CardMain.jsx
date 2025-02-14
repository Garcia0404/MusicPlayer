import React from 'react'
import { Circle } from '../../../components'
import { motion } from 'framer-motion'
export const CardMain = ({ layout = false, ...albumid }) => {
  return (
    <article className='w-full flex flex-col sm:flex-row gap-6 mobileLg:items-center'>
      {
        layout ? (
          <>
            <motion.div layoutId={`album-${albumid.nombre}`} transition={{ duration: 0.4 }} className='z-20 mx-auto tablet:mx-0 size-40 xl:min-w-56 xl:size-56 shadow-xl mobileLg:w-auto rounded overflow-hidden'>
              <motion.img className='size-40 xl:size-56 xl:min-w-56 mx-auto' src={albumid.image} alt={albumid.nombre} width="400px" height="400px" />
            </motion.div>
            <div>
              <span className='text-sm'>Album</span>
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2, ease: "easeIn", delay: 0.2, bounce: "true" }}
                className='font-extrabold lg:text-4xl 1400:text-5xl 1600:text-6xl max-sm:text-balance 1900:text-7xl sm:whitespace-nowrap'>{albumid.nombre}</motion.h1>
              <div className='flex text-base font-light gap-2 items-center mt-4'>
                <span>The Strokes</span>
                <Circle />
                <span>{albumid.año}</span>
                <Circle />
                <span>{albumid.canciones.length} songs</span>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className='z-20 mx-auto tablet:mx-0 w-40 h-40 mobileLg:w-auto bg-grayMain rounded overflow-hidden shadow-xl'>
              <img className='size-40 mx-auto' src={albumid.image} alt={albumid.nombre} />
            </div>
            <div className='overflow-hidden'>
              <span className='text-sm'>Album</span>
              <h1 className='font-bold text-balance'>{albumid.nombre}</h1>
              <div className='flex text-base font-light gap-2 items-center'>
                <span>The Strokes</span>
                <Circle />
                <span>{albumid.año}</span>
                <Circle />
                <span>{albumid.canciones.length} songs</span>
              </div>
            </div>
          </>
        )
      }
    </article>
  )
}
