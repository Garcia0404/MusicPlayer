import { createContext, useEffect, useState, useRef, useContext } from "react";
import { useLocation } from "react-router-dom";
import { fetcher } from "../helper/fetch";
import useSWR from "swr";
export const contexto = createContext()
export const AppContext = ({ children }) => {
  const location = useLocation()
  const ref = useRef(null)
  const [play, setPlay] = useState(false)
  const [allLoaded, setAllLoaded] = useState(false)
  const [random, setRandom] = useState(false)
  const [repeat, setRepeat] = useState(false)
  const [volume, setVolume] = useState(100)
  const [likeSong, setLikeSong] = useState(JSON.parse(localStorage.getItem('favorites')) ? JSON.parse(localStorage.getItem('favorites')) : [])
  const [musicTime, setMusicTime] = useState(0)
  const [sliderTime, setSliderTime] = useState(0)
  const [music, setMusic] = useState({})
  const [recent, setRecent] = useState([])
  const [showFooter, setShowFooter] = useState(true)
  const { data, error } = useSWR('/', fetcher)
  const { data:songs,error:SongsError } = useSWR('songs', fetcher)
  useEffect(() => {
    const isAlbumPage = /^\/albums\/[^\/]+\/[^\/]+$/.test(location.pathname);
    if (!isAlbumPage) {
      setShowFooter(true);
    }
  }, [location.pathname]);
  useEffect(() => {
    if (music.name) {
      localStorage.setItem('album', music.album.albumName)
      localStorage.setItem('song', music.name)
    }
  }, [music])
  useEffect(() => {
    const album = localStorage.getItem('album')
    const song = localStorage.getItem('song')
    if (album && song && data) {
      const alb = data.find(albm => albm.nombre === album)
      const sng = alb.canciones.find((msc) => msc.name === song)
      setMusic(sng)
    }
  }, [data])
  useEffect(() => {
    if (localStorage.getItem('favorites')) {
      const favorites = JSON.parse(localStorage.getItem('favorites'))
      setLikeSong(favorites)
    }
  }, [])

  return (
    <contexto.Provider value={{ play, setPlay, music, setMusic, random, setRandom, repeat, setRepeat, volume, setVolume, likeSong, setLikeSong, musicTime, setMusicTime, sliderTime, setSliderTime, recent, setRecent, showFooter, setShowFooter, ref, data, error, allLoaded, setAllLoaded,songs }}>
      {children}
    </contexto.Provider>
  )
}
export const useAppContext = () => {
  const context = useContext(contexto);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};