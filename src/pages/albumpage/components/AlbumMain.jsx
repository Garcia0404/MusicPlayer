import { useContext, useEffect } from 'react'
import { CardMain } from '../../homepage/components'
import { contexto } from '../../../context/AppContext'
import { Navigate, useParams } from 'react-router-dom'
import { BackButton } from '../../../components/ui/BackButton'
import { formatTime } from '../../../utils/formatTime'
import { useScrollToTop } from '../../../hooks/useScrollToTop'
import { Table } from "../../../components/ui/Table"
export const AlbumMain = () => {
  const { data } = useContext(contexto)
  const nameAlbum = useParams().name
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
  return (
    <>
      {albumid ? (
        <main className='max-w-[700px] relative lg:max-w-full w-full mobile:mx-auto lg:mx-0 col-start-3 col-end-8 bg-secondary overflow-auto sm:rounded-md max-lg:pb-32'>
          <section className='bg-gradient-to-b from-teal-800 to-secondary text-white text-3xl pt-10 px-6 tablet:pt-12 sticky top-0 right-0 pb-6 z-10'>
            <BackButton to="/albums" />
            <CardMain {...albumid} layout={true} />
          </section>
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
