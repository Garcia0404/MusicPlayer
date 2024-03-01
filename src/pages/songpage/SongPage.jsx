import { Navbar } from '../homepage/components'
import { CardSong } from './components'
export const SongPage = () => {
  return (
    <div className='flex lg:grid grid-cols-6 flex-1 w-full gap-2 bg-black mobileLg:pt-2 mobileLg:px-2 lg:overflow-auto'>
      <Navbar/>
      <CardSong/>
    </div>
  )
}
