import React from 'react'
import { Circle } from '../../../components'
import { motion } from 'framer-motion'
export const CardMain = ({ layout = false, ...albumid }) => {
  return (
    <article className='w-full flex flex-col sm:flex-row gap-6 mobileLg:items-center'>
      {
        layout ? (
          <>
            <motion.div layoutId={`album-${albumid.nombre}`} transition={{duration:0.3}} className='z-20 mx-auto tablet:mx-0 w-40 h-40 mobileLg:w-auto bg-grayMain rounded overflow-hidden shadow-xl'>
              <motion.img className='w-40 h-40 mx-auto' src={albumid.image} alt={albumid.nombre} />
            </motion.div>
            <div className='overflow-hidden'>
              <span className='text-sm'>Album</span>
              <motion.h1 animate={{y:[30,0],opacity:[0,1]}} transition={{duration:0.3,ease:"easeIn"}} className='font-bold text-balance'>{albumid.nombre}</motion.h1>
              <div className='flex text-base font-light gap-2 items-center'>
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
              <img className='w-40 h-40 mx-auto' src={albumid.image} alt={albumid.nombre} />
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
