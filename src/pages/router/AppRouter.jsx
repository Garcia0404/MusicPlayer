import { Route, Routes } from 'react-router-dom'
import { HomePage, SearchPage } from '..'
import { Footer } from '../../components'
export const AppRouter = () => {
  return (
    <div className='flex flex-col h-screen w-full'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/search' element={<SearchPage />} />
        <Route />
      </Routes>
      <Footer />
    </div>
  )
}
