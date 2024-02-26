import { useContext, useEffect } from 'react'
import { contexto } from '../../context/AppContext'
import { CardFavorites } from './components'

export const FavoritesPage = () => {
  const { likeSong } = useContext(contexto)
  
  return (
    <div className='flex lg:grid grid-cols-6 flex-1 w-full gap-2 bg-black pt-2 px-2 lg:overflow-auto'>
      <h1>FavoritesPage</h1>
      <main>
        <ul>
          {
            likeSong.map((song) => (
              <li key={song.name}>
                <CardFavorites {...song} />
              </li>
            ))
          }
        </ul>
      </main>

    </div>
  )
}
