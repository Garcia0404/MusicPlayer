import React from 'react'
import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const CardSong = () => {
  const songname = useParams().nameSong
  return (
    <main className='max-w-[700px] lg:max-w-full w-full mobile:mx-auto lg:mx-0 col-start-3 col-end-8 bg-secondary overflow-auto mobileLg:rounded-md'>
      {songname}
    </main>
  )
}
