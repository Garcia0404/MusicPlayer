import { useContext } from 'react'
import { CardMain } from '.'
import { albums } from '../../../helper/music/albums'
import { contexto } from '../../../context/AppContext'
export const Main = () => {

  const a = albums[0].canciones
  const { setMusic } = useContext(contexto)
  return (
    <main className='max-w-[700px] lg:max-w-full mx-auto lg:mx-0 col-start-3 col-end-8 bg-secondary rounded-md lg:overflow-auto'>
      
      <section className='bg-gradient-to-b from-teal-800 to-secondary text-white text-3xl px-6 pt-10 rounded-md'>
        <CardMain {...albums[0]}/>
      </section>
      <section className='p-6'>
        <table className='w-full'>
          <thead className='border-b border-white9 text-white9'>
            <tr>
              <th className='p-2'>#</th>
              <th className='text-start'>Title</th>
              <th className='text-start' >Artist</th>
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
                  <td className='text-white9'>The Strokes</td>
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
