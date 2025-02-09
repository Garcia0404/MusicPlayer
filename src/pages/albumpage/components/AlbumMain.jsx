import { useContext } from 'react'
import { CardMain } from '../../homepage/components'
import { contexto } from '../../../context/AppContext'
import { Navigate, useParams } from 'react-router-dom'
import { BackButton } from '../../../components/ui/BackButton'
import { formatTime } from '../../../utils/formatTime'
export const AlbumMain = () => {
  const { data } = useContext(contexto)
  const nameAlbum = useParams().name
  const albumid = data.find((album) => (
    album.nombreRoute == nameAlbum
  ))
  const a = albumid ? albumid.canciones : null
  const { setMusic, setPlay } = useContext(contexto)
  return (
    <>
      {albumid ? (
        <main className='max-w-[700px] relative lg:max-w-full w-full mobile:mx-auto lg:mx-0 col-start-3 col-end-8 bg-secondary overflow-auto sm:rounded-md'>
          <BackButton />
          <section className='bg-gradient-to-b from-teal-800 to-secondary text-white text-3xl px-6 pt-10 tablet:pt-12 sticky top-0 right-0 pb-6 z-10'>
            <CardMain {...albumid} />
          </section>
          <section className='px-6 pb-6 overflow-auto'>
            <table className='w-full'>
              <thead className='border-b border-white9 text-white9'>
                <tr>
                  <th className='p-2'>#</th>
                  <th className='text-start'>Title</th>
                  <th className='hidden mobileLg:table-cell text-start' >Artist</th>
                  <th>
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </th>
                </tr>
              </thead>
              <tbody className='text-white'>
                {a &&
                  a.map((music, index) => {
                    return (
                      <tr key={index} onClick={() => { setMusic(music), setPlay(true) }} className='hover:bg-grayMain cursor-pointer active:scale-[0.98] hover:scale-[1.02] transition-all'>
                        <td className='text-center text-white9 p-2 '>{index + 1}</td>
                        <td>{music.name}</td>
                        <td className='text-white9 hidden mobileLg:table-cell'>The Strokes</td>
                        <td className='text-white9'>{formatTime(music.duration)}</td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </section>
        </main>) : (
        <Navigate to="/" />
      )
      }
    </>
  )
}
