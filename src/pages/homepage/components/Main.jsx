import React from 'react'
import { CardMain } from '.'
import { albums } from '../../../helper/music/albums'
export const Main = () => {
  const a = albums[0].canciones
  console.log(a)
  
  return (
    <main className='col-start-3 col-end-8 bg-secondary rounded-md'>
      
      <section className='bg-gradient-to-b from-teal-800 to-secondary text-white text-3xl px-6 pt-10 rounded-md'>
        <CardMain/>
      </section>
      <section className='p-6'>
        <table className='w-full'>
          <thead className='border-b border-white9 text-white9'>
            <tr>
              <th>#</th>
              <th className='text-start'>Title</th>
              <th className='text-start' >Artist</th>
              <th className='text-start'>Duration</th>
            </tr>
          </thead>
          <tbody className='text-white overflow-auto'>
            {
              a.map((music,index)=>(
                <tr key={index} className='hover:bg-grayMain p-4'>
                  <td className='text-center text-white9'>{index+1}</td>
                  <td>{music.name}</td>
                  <td className='text-white9'>The Strokes</td>
                  <td className='text-white9'>2min</td>
                </tr>
                
              ))
            }
          </tbody>
        </table>
      </section>
    </main>
  )
}
