import { Navbar } from '../homepage/components'
import { AlbumMain } from './components'
export const AlbumPage = () => {
  return (
    <div className='flex lg:grid grid-cols-6 flex-1 w-full gap-2 bg-black pt-10 mobileLg:px-2 lg:overflow-auto'>
      <Navbar/>
      <AlbumMain/>
    </div>
  )
}
