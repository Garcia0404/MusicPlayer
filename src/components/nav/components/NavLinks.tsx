import React from 'react'
import { NavLink } from 'react-router-dom'
interface LinksProps {
  link: string
  route: string
  className: string
}
const Svg = ({ name, fill = "none" }: { name: string, fill: string }) => {
  return (
    <>
      {
        name == 'Home' && (
          <svg className='size-6' stroke='currentColor' fill={fill} x="0px" y="0px" width="100" height="100" viewBox="0 0 24 24">
            <path d="M 12 2 A 1 1 0 0 0 11.289062 2.296875 L 1.203125 11.097656 A 0.5 0.5 0 0 0 1 11.5 A 0.5 0.5 0 0 0 1.5 12 L 4 12 L 4 20 C 4 20.552 4.448 21 5 21 L 9 21 C 9.552 21 10 20.552 10 20 L 10 14 L 14 14 L 14 20 C 14 20.552 14.448 21 15 21 L 19 21 C 19.552 21 20 20.552 20 20 L 20 12 L 22.5 12 A 0.5 0.5 0 0 0 23 11.5 A 0.5 0.5 0 0 0 22.796875 11.097656 L 12.716797 2.3027344 A 1 1 0 0 0 12.710938 2.296875 A 1 1 0 0 0 12 2 z"></path>
          </svg>
        )
      }
      {
        name == 'Search' && (
          <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            <circle cx="10.5" cy="10.5" r="4" fill={fill} />
          </svg>
        )
      }
      {
        name == 'Albums' && (
          <svg className="w-6 h-6" fill={fill} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z" />
          </svg>
        )
      }
      {
        name == 'Favorites' && (
          <svg className="w-6 h-6" fill={fill} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
          </svg>
        )
      }
    </>

  )
}
export const NavLinks: React.FC<LinksProps> = ({ link, route, className = '' }) => {
  return (
    <NavLink to={route} className={({ isActive }) => isActive ? 'text-white' : 'text-white9'}>
      {
        ({ isActive }) => (
          <div className={`flex items-center gap-4 hover:text-white cursor-pointer transition-all font-semibold ${className}`}>
            <Svg name={link} fill={isActive ? 'white' : 'none'} />
            <span>{link}</span>
          </div>
        )
      }
    </NavLink>
  )
}
