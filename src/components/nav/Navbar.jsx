import React from 'react'
import { NavLink,useNavigate } from 'react-router-dom'
import { CardAlbum } from './components'
import { albums } from '../../helper/music/albums'
export const Navbar = () => {
  const navigate = useNavigate()
  return (
    <nav className='hidden lg:flex flex-col bg-black gap-2 col-start-1 col-end-3'>
      <section className='bg-secondary rounded-md p-6'>
        <div className='text-white9 font-semibold flex flex-col gap-6'>
          <NavLink to='/' className={({ isActive }) => isActive ? 'text-white' : ''}>
            <div className='flex items-center gap-4 hover:text-white cursor-pointer transition-all'>
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
              <span>Home</span>
            </div>
          </NavLink>
          <NavLink to='/search' className={({ isActive }) => isActive ? 'text-white' : ''}>
            <div className='flex items-center gap-4 hover:text-white cursor-pointer transition-all'>
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
              <span>Search</span>
            </div>
          </NavLink>
        </div>
      </section>
      <section className='bg-secondary flex-1 rounded-md p-6'>
        <NavLink to='/albums' className={({ isActive }) => isActive ? 'text-white' : ''}>
        <span className='flex gap-4 text-white9 font-semibold hover:text-white cursor-pointer transition-all'>
          <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z" />
          </svg>
          <h1>Albums</h1>
        </span>
        </NavLink>
        <ul className='list-none mt-5 flex flex-col gap-2'>
          {
            albums.map((album)=>(
              <li onClick={()=>navigate(`/albums/${album.nombreRoute}`)} key={album.nombre}>
                <CardAlbum {...album}/>
              </li>
              ))
          }

        </ul>
        
      </section>
    </nav>
  )
}
