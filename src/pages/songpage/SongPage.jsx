import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { albums } from '../../helper/music/albums'

export const SongPage = () => {
  const songname = useParams().nameSong
  albums.map((album)=>(
    console.log(album.canciones)
  ))
  

  return (
    <div className='text-white'>{{ruta}}</div>
  )
}
