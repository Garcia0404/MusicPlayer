import React from 'react'
import { useNavigate } from 'react-router-dom'
import { CardAlbum, NavLinks } from './components'
import { albums } from '../../helper/music/albums'
export const Navbar = () => {
  const navigate = useNavigate()
  return (
    <nav className='hidden lg:flex flex-col bg-black gap-2 col-start-1 col-end-3 overflow-hidden'>
      <section className='bg-secondary rounded-md p-6'>
        <div className='text-white9 font-semibold flex flex-col gap-6'>
          <NavLinks link='Home' route='/' />
          <NavLinks link='Search' route='/search' />
          <NavLinks link='Favorites' route='/favorites' />
        </div>
      </section>
      <section className='bg-secondary flex-1 rounded-md overflow-auto'>
        <NavLinks link='Albums' route='/albums' className='sticky top-0 right-0 bg-secondary p-6' />
        <ul className='list-none flex flex-col gap-2 px-6 pb-6'>
          {
            albums.map((album) => (
              <li onClick={() => navigate(`/albums/${album.nombreRoute}`)} key={album.nombre}>
                <CardAlbum {...album} />
              </li>
            ))
          }

        </ul>

      </section>
    </nav>
  )
}
