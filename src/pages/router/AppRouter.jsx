import { Route, Routes } from 'react-router-dom'
import { HomePage, SearchPage, AppRouterD, FavoritesPage, LoadingHomepage } from '..'
import { Footer, NavbarMobile, Navbar, Loading } from '../../components'
import { useContext } from 'react'
import { contexto } from '../../context/AppContext'
import { useAddToRecents } from '../../hooks/useAddToRecents'
import { useSongEnded } from "../../hooks/useSongEnded"
export const AppRouter = () => {
  const { allLoaded, music,ref,songs } = useContext(contexto)
  const { handleSongEnded } = useSongEnded(songs)
  // Add to recents
  useAddToRecents()
  return (
    <>
      {allLoaded ?
        <div className='flex flex-col h-screen w-full'>
          <audio onEnded={handleSongEnded} ref={ref} src={music.music}></audio>
          <div className='flex flex-1 w-full gap-2 bg-black md:p-2 overflow-auto'>
            <Navbar />
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/search' element={<SearchPage />} />
              <Route path='/favorites' element={<FavoritesPage />} />
              <Route path='/*' element={<AppRouterD />} />
            </Routes>
          </div>
          <Footer />
          <NavbarMobile />
        </div> :
        <LoadingHomepage />
      }
      <Loading />
    </>
  )
}
