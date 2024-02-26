import React from 'react'

export const CardFavorites = (music) => {
  console.log(music)
  return (
    <div className='text-white'>{music.name}</div>
  )
}
