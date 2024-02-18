import React from 'react'
import albumComedown from '../../../assets/comedownMachine.jpg'
export const CardSong = () => {
  return (
    <>
      <img className='w-16 h-16 rounded' src={albumComedown} alt="album" />
      <div className='flex flex-col text-white justify-center'>
        <h1 className='text-sm'>Call It Fate, Call It Karma</h1>
        <span className='font-extralight text-sm'>The Strokes</span>
      </div>
    </>
  )
}
