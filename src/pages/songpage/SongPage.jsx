import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { albums } from '../../helper/music/albums'
import { Navbar } from '../homepage/components'


export const SongPage = () => {
  const songname = useParams().nameSong

  return (
    <div className='flex lg:grid grid-cols-6 flex-1 w-full gap-2 bg-black mobileLg:pt-2 mobileLg:px-2 lg:overflow-auto'>
      <Navbar/>

    </div>
  )
}
