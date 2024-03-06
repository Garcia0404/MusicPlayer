import {useContext} from 'react'
import { contexto } from '../../../context/AppContext'
import { albums } from '../../../helper/music/albums' 
export const PreviousSong = () => {
  const { music, setMusic, setPlay,random } = useContext(contexto)
  function previousSong() {
    if(!random){
    const album = music.album.albumName
    const al = albums.find(a => a.nombre == album)
    const index = al.canciones.findIndex(a => a.name == music.name)
    if (index > 1) {
      setMusic(al.canciones[index-1])
      setPlay(true)
    }else{
      setMusic(al.canciones[0])
      setPlay(true)
    }}else{
      function randomNumber(n){
        const number = Math.floor(Math.random()*n)
        return number
      }
      let n = albums[randomNumber(6)]
      const length = n.canciones.length
      n = n.canciones[randomNumber(length)]
      setMusic(n)
    }
  }

  return (
    <div onClick={previousSong} className='hidden mobileLg:block'>
      <svg className='fill-white9 h-5 w-5 hover:fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
        <path d="M267.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160L64 241V96c0-17.7-14.3-32-32-32S0 78.3 0 96V416c0 17.7 14.3 32 32 32s32-14.3 32-32V271l11.5 9.6 192 160z" />
      </svg>
    </div>
  )
}
