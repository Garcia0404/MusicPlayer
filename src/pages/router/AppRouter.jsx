import { Route, Routes } from 'react-router-dom'
import { HomePage, SearchPage, AppRouterD, FavoritesPage } from '..'
import { Footer, NavbarMobile, Navbar } from '../../components'
import { useContext } from 'react'
import { contexto } from '../../context/AppContext'
export const AppRouter = () => {
  const { music } = useContext(contexto)
  return (
    <div className='flex flex-col h-screen w-full'>
      <div className='flex lg:grid grid-cols-6 flex-1 w-full gap-2 bg-black tablet:p-2 lg:overflow-auto'>
        <Navbar />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/search' element={<SearchPage />} />
            <Route path='/favorites' element={<FavoritesPage />} />
            <Route path='/*' element={<AppRouterD />} />
          </Routes>
      </div>
      {music.name && <Footer />}
      <NavbarMobile />
    </div>
  )
}
