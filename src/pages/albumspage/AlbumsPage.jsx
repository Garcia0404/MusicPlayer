import { CardAlbum } from '../../components'
import { useContext } from 'react'
import { contexto } from '../../context/AppContext'
export const AlbumsPage = () => {
  const { data } = useContext(contexto)
  return (
      <div className='max-w-[700px] lg:max-w-full w-full mobile:mx-auto lg:mx-0 col-start-3 col-end-8 bg-secondary overflow-auto tablet:rounded-md border-white'>
        <header className='relative w-full flex items-center justify-between flex-col bg-black'>
          <div className='h-[270px] max-w-[900px] w-full overflow-hidden bg-grayMain bg-center bg-cover' style={{backgroundImage:"url(/img/the-strokes.webp)"}}>
          </div>
          <h1 className='absolute bottom-10 left-0 text-white text-5xl mobileLg:text-7xl tablet:text-8xl font-bold p-5'>The Strokes</h1>
        </header>
        <main className='relative flex flex-col gap-3 pt-8 px-3 sm:px-4 pb-4 text-white overflow-auto'>
          <div className='absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-[#562D03]'></div>
          <h2 className='text-white text-3xl font-medium z-10'>Albums</h2>
          <ul className='z-10'>
            {
              data.map((album) => (
                <CardAlbum  {...album} key={`album-${album.nombre}`} layout/>
              ))
            }
          </ul>
        </main>
      </div>

  )
}
