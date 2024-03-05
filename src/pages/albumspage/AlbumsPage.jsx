import { useNavigate } from 'react-router-dom'
import { CardAlbum, Navbar } from '../../components'
import { albums } from '../../helper/music/albums'
export const AlbumsPage = () => {
  const navigate = useNavigate()
  return (
    <div className='flex lg:grid grid-cols-6 flex-1 w-full gap-2 bg-black tablet:p-2 lg:overflow-auto'>
      <Navbar />
      <div className='max-w-[700px] lg:max-w-full w-full mobile:mx-auto lg:mx-0 col-start-3 col-end-8 bg-secondary overflow-auto tablet:rounded-md border-white'>
        <header className='relative w-full flex items-center justify-between flex-col bg-black'>
          <div className='max-h-[270px] overflow-hidden'>
            <img className='tablet:object-none object-cover tablet:object-bottom w-full h-auto' src='/img/The-strokes.jpg' alt="TheStrokes" />
          </div>
          <h1 className='absolute bottom-10 left-0 text-white text-5xl mobileLg:text-7xl tablet:text-8xl font-bold p-5'>The Strokes</h1>
        </header>
        <main className='relative flex flex-col gap-3 pt-8 px-4 pb-4 text-white overflow-auto'>
          <div className='absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-[#562D03]'></div>
          <h2 className='text-white text-3xl z-[2] font-medium'>Albums</h2>
          <div className='z-[2]'>
            {
              albums.map((album) => (
                <div onClick={() => navigate(`/albums/${album.nombreRoute}`)} key={album.nombre}>
                  <CardAlbum {...album} />
                </div>
              ))
            }
          </div>
        </main>
      </div>
    </div>
  )
}
