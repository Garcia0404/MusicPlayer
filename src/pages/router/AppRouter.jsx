import { Route, Routes } from 'react-router-dom'
import { HomePage, SearchPage, AppRouterD, FavoritesPage, LoadingHomepage } from '..'
import { Footer, NavbarMobile, Navbar, Loading } from '../../components'
import { useContext } from 'react'
import { contexto } from '../../context/AppContext'
import { useAddToRecents } from '../../hooks/useAddToRecents'
export const AppRouter = () => {
  const { allLoaded } = useContext(contexto)
  // Add to recents
  useAddToRecents()
  return (
    <>
      {allLoaded ?
        <div className='flex flex-col h-screen w-full'>
          <div className='flex lg:grid grid-cols-6 flex-1 w-full gap-2 bg-black md:p-2 lg:overflow-auto'>
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
