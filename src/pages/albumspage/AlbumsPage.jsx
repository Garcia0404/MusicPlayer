import { useNavigate } from 'react-router-dom'
import { CardAlbum,Navbar } from '../../components'
import { albums } from '../../helper/music/albums'
export const AlbumsPage = () => {
  const navigate = useNavigate()
  return (
    <div className='flex lg:grid grid-cols-6 flex-1 w-full gap-2 bg-black pt-2 px-2 lg:overflow-auto'>
      <Navbar/>
      <div className='col-start-3 col-end-7'>
        <nav className='w-full flex items-center p-3 justify-between'>
          <h1 className='text-white text-3xl'>Albums</h1>
          <div>
            <svg className="w-6 h-6 stroke-white9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </div>
        </nav>
        <main className='flex flex-col gap-3 p-3 text-white overflow-auto'>
          {
            albums.map((album) => (
              <div onClick={() => navigate(`/albums/${album.nombreRoute}`)} key={album.nombre}>
                <CardAlbum {...album} />
              </div>
            ))
          }
        </main>
      </div>
    </div>
  )
}
