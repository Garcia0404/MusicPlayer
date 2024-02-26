import { Route, Routes } from 'react-router-dom'
import { HomePage, SearchPage,AppRouterD,FavoritesPage } from '..'
import { Footer,NavbarMobile } from '../../components'
export const AppRouter = () => {
  return (
    <div className='flex flex-col h-screen w-full'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/search' element={<SearchPage />} />
        <Route path='/favorites' element={<FavoritesPage/>}/>
        <Route path='/*' element={<AppRouterD/>}/>
      </Routes>
      <Footer />
      <NavbarMobile/>
    </div>
  )
}
