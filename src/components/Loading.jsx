import React, { useContext, useEffect, useState } from 'react'
import { contexto } from '../context/AppContext'

export const Loading = () => {
  const { data,setAllLoaded } = useContext(contexto)
  const [loaded,setLoaded] = useState(Array(data?.length).fill(false))
  const handleLoad = (index) => {
    setLoaded(prev => {
      const newLoaded = [...prev]
      newLoaded[index] = true
      return newLoaded
    })
  }
  useEffect(() => {
    if(loaded.every((load)=> load ===true)){
      setAllLoaded(true)
    }
  },[loaded])
  return (
    <div className="hidden">
    { data &&
      data.map((album, index) => (
        <img onLoad={() => handleLoad(index)} key={album.nombre} src={album.image} alt={album.nombre} />
      ))
    }
  </div>
  )
}
