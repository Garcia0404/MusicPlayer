import { useContext, useRef } from 'react'
import { CardMain } from '../../homepage/components'
import { contexto } from '../../../context/AppContext'
import { Navigate, useParams } from 'react-router-dom'
import { BackButton } from '../../../components/ui/BackButton'
import { formatTime } from '../../../utils/formatTime'
import { useScrollToTop } from '../../../hooks/useScrollToTop'
import { Table } from "../../../components/ui/Table"
import { useScroll, useTransform } from 'framer-motion'
export const AlbumMain = () => {
  const { data } = useContext(contexto)
  const nameAlbum = useParams().name
  const ref = useRef()
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 100], [0, 1])
  const albumid = data.find((album) => (
    album.nombreRoute == nameAlbum
  ))
  const a = albumid ? albumid.canciones : null
  const items = a.map(song => (
    {
      key: song.name,
      name: song.name,
      artist: "The Strokes",
      duration: formatTime(song.duration),
      handleClick: () => {
        setMusic(song);
        setPlay(true);
      }
    }
  ))
  const { setMusic, setPlay } = useContext(contexto)
  useScrollToTop()
  const BACKGROUND_COLOR = albumid.backgroundColor
  return (
    <>
      {albumid ? (
        <main ref={ref} className='max-w-[700px] relative lg:max-w-full w-full mobile:mx-auto lg:mx-0 col-start-3 col-end-8 bg-secondary overflow-auto sm:rounded-md max-lg:pb-32'>
          <section style={{ background: `linear-gradient(${BACKGROUND_COLOR},#121212)` }} className='text-white text-3xl pt-10 px-6 lg:pt-6 pb-6 z-10'>
            <div className='lg:hidden'>
              <BackButton to="/albums" />
            </div>
            <CardMain {...albumid} layout={true} />
          </section>
          {/* <section style={{backgroundColor:BACKGROUND_COLOR,opacity}} className='text-white text-3xl py-3 px-6 z-20 w-full font-bold sticky top-0 left-0'>
            <h2>{albumid.nombre}</h2>
          </section> */}
          <section className='px-6 pb-6 overflow-auto'>
            <Table items={items} />
          </section>
        </main>) : (
        <Navigate to="/" />
      )
      }
    </>
  )
}
