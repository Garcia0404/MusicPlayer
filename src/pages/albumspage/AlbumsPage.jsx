import { useNavigate } from 'react-router-dom'
import { CardAlbum } from '../../components'
import { useContext } from 'react'
import { contexto } from '../../context/AppContext'
import { useCachedImage } from '../../hooks/useCachedImage'
export const AlbumsPage = () => {
  const { data } = useContext(contexto)
  const { src,loading,error } = useCachedImage('/img/the-strokes.webp')
  const navigate = useNavigate()
  return (
      <div className='max-w-[700px] lg:max-w-full w-full mobile:mx-auto lg:mx-0 col-start-3 col-end-8 bg-secondary overflow-auto tablet:rounded-md border-white'>
        <header className='relative w-full flex items-center justify-between flex-col bg-black'>
          <div className='h-[270px] w-full overflow-hidden bg-grayMain'>
            {
              loading?<></>:error?<></>:<img className='object-cover h-full w-full albums-img' src={src} alt="TheStrokes"/>
            }
          </div>
          <h1 className='absolute bottom-10 left-0 text-white text-5xl mobileLg:text-7xl tablet:text-8xl font-bold p-5'>The Strokes</h1>
        </header>
        <main className='relative flex flex-col gap-3 pt-8 px-4 pb-4 text-white overflow-auto'>
          <div className='absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-[#562D03]'></div>
          <h2 className='text-white text-3xl z-[2] font-medium'>Albums</h2>
          <div className='z-[2]'>
            {
              data.map((album) => (
                <div onClick={() => navigate(`/albums/${album.nombreRoute}`)} key={album.nombre}>
                  <CardAlbum {...album} />
                </div>
              ))
            }
          </div>
        </main>
      </div>

  )
}
