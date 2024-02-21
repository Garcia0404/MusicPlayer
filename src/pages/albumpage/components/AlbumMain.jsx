import { useContext } from 'react'
import { CardMain } from '../../homepage/components'
import { albums } from '../../../helper/music/albums'
import { contexto } from '../../../context/AppContext'
import { useParams } from 'react-router-dom'
export const AlbumMain = () => {
  const nameAlbum = useParams().name
  const albumid = albums.find((album)=>(
    album.nombreRoute==nameAlbum
  ))
  const a = albumid.canciones
  const { setMusic } = useContext(contexto)
  return (
    <main className='max-w-[700px] lg:max-w-full w-full mobile:mx-auto lg:mx-0 col-start-3 col-end-8 bg-secondary mobileLg:rounded-md lg:overflow-auto'>
      
      <section className='bg-gradient-to-b from-teal-800 to-secondary text-white text-3xl px-6 pt-10 rounded-md'>
        <CardMain {...albumid}/>
      </section>
      <section className='p-6'>
        <table className='w-full'>
          <thead className='border-b border-white9 text-white9'>
            <tr>
              <th className='p-2'>#</th>
              <th className='text-start'>Title</th>
              <th className='hidden mobileLg:table-cell text-start' >Artist</th>
              <th className='text-start'>Duration</th>
            </tr>
          </thead>
          <tbody className='text-white'>
            {
              a.map((music,index)=>{
                return(
                <tr key={index} onClick={()=>setMusic(music)} className='hover:bg-grayMain cursor-pointer active:scale-[0.98] hover:scale-[1.02] transition-all'>
                  <td className='text-center text-white9 p-2 '>{index+1}</td>
                  <td>{music.name}</td>
                  <td className='text-white9 hidden mobileLg:table-cell'>The Strokes</td>
                  <td className='text-white9'>2min</td>
                </tr>
                )
              })
            }
          </tbody>
        </table>
      </section>
    </main>
  )
}
