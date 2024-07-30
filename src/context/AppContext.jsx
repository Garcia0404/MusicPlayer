import { createContext, useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { fetcher } from "../helper/fetch";
import useSWR from "swr";
export const contexto = createContext()
export const AppContext = ({ children }) => {
  const location = useLocation()
  const ref = useRef(null)
  const [play, setPlay] = useState(false)
  const [ allLoaded,setAllLoaded ] = useState(false)
  const [random, setRandom] = useState(false)
  const [repeat, setRepeat] = useState(false)
  const [volume, setVolume] = useState(100)
  const [likeSong, setLikeSong] = useState([])
  const [musicTime, setMusicTime] = useState(0)
  const [sliderTime, setSliderTime] = useState(0)
  const [music, setMusic] = useState({})
  const [recent, setRecent] = useState([])
  const [showFooter, setShowFooter] = useState(true)
  const { data, error } = useSWR('/', fetcher)

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
      const al = data.find(a => a.nombre === album)
      const s = al.canciones.find((m) => m.name === song)
      setMusic(s)
    }
    if (localStorage.getItem('favorites')) {
      const favorites = JSON.parse(localStorage.getItem('favorites'))
      setLikeSong(favorites)
    }
    if (localStorage.getItem('recents')) {
      const updateRecent = JSON.parse(localStorage.getItem('recents'))
      setRecent(updateRecent)
    }
  }, [])

  useEffect(() => {
    if (likeSong.length !== 0) {
      localStorage.setItem('favorites', JSON.stringify(likeSong))
    }
  }, [likeSong])

  useEffect(() => {
    if (music.name) {
      if (recent.length > 0) {
        const index = recent.findIndex((song) => song.name === music.name);
        if (index !== -1) {
          return
        }
      }
      const updatedRecent = [music, ...recent]
      if (recent.length < 6) {
        setRecent(updatedRecent)
        localStorage.setItem('recents', JSON.stringify(updatedRecent))
      } else if (recent.length === 6) {
        updatedRecent.pop()
        setRecent(updatedRecent)
        localStorage.setItem('recents', JSON.stringify(updatedRecent))
      }
    }

  }, [music]);

  return (
    <contexto.Provider value={{ play, setPlay, music, setMusic, random, setRandom, repeat, setRepeat, volume, setVolume, likeSong, setLikeSong, musicTime, setMusicTime, sliderTime, setSliderTime, recent, setRecent, showFooter, setShowFooter, ref, data,error,allLoaded,setAllLoaded }}>
      {children}
    </contexto.Provider>
  )
}
