import { useContext } from 'react'
import { contexto } from '../../context/AppContext'
import { CardFavorites } from './components'
import { Navbar } from '../../components'

export const FavoritesPage = () => {
  const { likeSong } = useContext(contexto)
  
  return (
    <div className='flex lg:grid grid-cols-6 flex-1 w-full gap-2 bg-black pt-2 px-2 lg:overflow-auto'>
      <Navbar/>
      <main className='text-white'>
        <h1>Favoritos</h1>
        <ul>
          {
            likeSong.map((song,index) => (
              <li key={index}>
                <CardFavorites {...song} />
              </li>
            ))
          }
        </ul>
      </main>

    </div>
  )
}
