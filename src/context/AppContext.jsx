import { createContext, useEffect, useState } from "react";
import { albums } from '../helper/music/albums'
export const contexto = createContext()
export const AppContext = ({ children }) => {
  const [play, setPlay] = useState(false)
  const [random, setRandom] = useState(false)
  const [repeat, setRepeat] = useState(false)
  const [volume, setVolume] = useState(100)
  const [ likeSong, setLikeSong ] = useState([])
  const [ musicTime,setMusicTime ] = useState(0)
  const [ sliderTime,setSliderTime ] = useState(0)
  const [music, setMusic] = useState({})
  useEffect(() => {
    (music.name) ? setPlay(true) : setPlay(false)
    if(music.name){
      localStorage.setItem('album',music.album.albumName)
      localStorage.setItem('song',music.name)
    }
  }, [music])
  useEffect(()=>{
    setPlay(true)
    if(localStorage.getItem('song')){
    const album = localStorage.getItem('album')
    const song = localStorage.getItem('song')
    const al = albums.find((a)=>a.nombre===album)
    const s = al.canciones.find((m)=>m.name===song)
    setMusic(s)
    }
  },[])
  useEffect(()=>{
    if(likeSong.length>0){
    localStorage.setItem('favorites',JSON.stringify(likeSong))
    }
  },[likeSong])
  useEffect(()=>{
    const favorites = JSON.parse(localStorage.getItem('favorites'))
    setLikeSong(favorites)
  },[])
  return (
    <contexto.Provider value={{ play, setPlay, music, setMusic, random, setRandom, repeat, setRepeat, volume, setVolume, likeSong, setLikeSong, musicTime,setMusicTime,sliderTime,setSliderTime }}>
      {children}
    </contexto.Provider>
  )
}
