import React from 'react'
import { albums } from '../../../helper/music/albums'
import { GeneralCard } from '../../homepage/components'
export const SearchSong = ({ nameSong,submit }) => {
  const music = albums.map((album) => {
    const song = album.canciones.find(song => song.name.trim().toLowerCase() === nameSong.trim().toLowerCase());
    if (song) {
      return song;
    } else {
      return null;
    }
  }).filter(song => song !== null);
  if (music.length > 0) {
    return (
      <main className='grid grid-cols-mainH p-3'>
        <GeneralCard music={music[0]} />
      </main>
    )
  } else {
    if(submit == ''){
      return <div className='text-white text-center text-xl mt-5 font-light'>Search for a song by The Strokes</div>
    }else{
    return (
      <div className='text-white text-center text-xl mt-5 font-light'>No matches found</div>
    )}
  }
}