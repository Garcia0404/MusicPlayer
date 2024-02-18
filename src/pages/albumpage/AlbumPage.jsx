import React from 'react'
import { useParams } from 'react-router-dom'
import { Navbar } from '../homepage/components'
import { AlbumMain } from './components'
export const AlbumPage = () => {
  const name = useParams().name
  return (
    <div className='grid grid-cols-6 flex-1 w-full gap-2 bg-black pt-10 px-2 overflow-auto'>
      <Navbar/>
      <AlbumMain/>
    </div>
  )
}
