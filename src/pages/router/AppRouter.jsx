import { Route, Routes } from 'react-router-dom'
import { HomePage, SearchPage,AppRouterD,FavoritesPage } from '..'
import { Footer,NavbarMobile } from '../../components'
import { useContext } from 'react'
import { contexto } from '../../context/AppContext'
export const AppRouter = () => {
  const { music } = useContext(contexto)
  function handleFooter(){
    if(music.name){
      return (<Footer />)
    }
  }
  return (
    <div className='flex flex-col h-screen w-full'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/search' element={<SearchPage />} />
        <Route path='/favorites' element={<FavoritesPage/>}/>
        <Route path='/*' element={<AppRouterD/>}/>
      </Routes>
      {handleFooter()}
      <NavbarMobile/>
    </div>
  )
}
