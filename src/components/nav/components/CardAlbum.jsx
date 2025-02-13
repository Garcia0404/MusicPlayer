import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
export const CardAlbum = ({ layout = false,...album }) => {
  const navigate = useNavigate()
  return (
    <li onClick={() => navigate(`/albums/${album.nombreRoute}`)} className='hover:bg-grayMain transition-colors flex rounded-md p-2 gap-3 cursor-pointer'>
      {
        layout ? (
          <motion.div layoutId={`album-${album.nombre}`} transition={{duration:0.3}}>
            <motion.img className='h-12 w-12 rounded-md' src={album.image} alt={album.nombre} />
          </motion.div>
        ) : (
          <div>
            <img className='h-12 w-12 rounded-md' src={album.image} alt={album.nombre} />
          </div>
        )
      }
      <main className='overflow-hidden'>
        <h1 className='text-white text-md text-nowrap'>{album.nombre}</h1>
        <div className='text-white9'>
          <span>Album - </span>
          <span> The Strokes</span>
        </div>
      </main>
    </li>
  )
}
