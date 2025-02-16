import { useContext, useRef } from 'react'
import { CardMain } from '../../homepage/components'
import { contexto } from '../../../context/AppContext'
import { Navigate, useParams } from 'react-router-dom'
import { BackButton } from '../../../components/ui/BackButton'
import { formatTime } from '../../../utils/formatTime'
import { useScrollToTop } from '../../../hooks/useScrollToTop'
import { Table } from '../../../components/ui/Table'
import { useScroll, useTransform, motion } from 'framer-motion'
import { useSizeById } from '../../../hooks/useSizeById'
export const AlbumMain = () => {
  const { data } = useContext(contexto)
  const nameAlbum = useParams().name
  const ref = useRef()
  const albumid = data.find((album) => (
    album.nombreRoute == nameAlbum
  ))
  const { scrollY } = useScroll({ container: ref });
  const { height } = useSizeById(`Album-${albumid.nombre}`);
  const opacity = useTransform(scrollY, [height - 60, height], [0, 1]);
  const opacityTitle = useTransform(scrollY, [height, height + 10], [0, 1])
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
        <motion.main
          key={`${albumid.nombre}-album`}
          className='max-w-[700px] relative lg:max-w-full w-full mobile:mx-auto lg:mx-0 flex-1 bg-secondary overflow-auto sm:rounded-md'>
          {/* <motion.section style={{ backgroundColor: "#003A43", opacity }} className='text-white text-3xl py-3 px-6 z-50 w-full font-bold sticky top-0 left-0'>
            <motion.h2 className='text-xl whitespace-nowrap' style={{ opacity: opacityTitle }}>{albumid.nombre}</motion.h2>
          </motion.section> */}
          <div ref={ref} className='absolute top-0 left-0 w-full h-full overflow-auto max-lg:pb-32'>
            <section id={`Album-${albumid.nombre}`} style={{ background: `linear-gradient(${BACKGROUND_COLOR},#121212)` }} className='text-white text-3xl pt-10 px-6 lg:pt-6 z-10'>
              <div className='lg:hidden'>
                <BackButton to="/albums" />
              </div>
              <CardMain {...albumid} layout={true} />
            </section>
            <section className='px-6 pb-6 mt-8 overflow-auto'>
              <Table items={items} />
            </section>
          </div>
        </motion.main>) : (
        <Navigate to="/" />
      )
      }
    </>
  )
}
