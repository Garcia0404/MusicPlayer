import React from 'react'
import { NavLink } from 'react-router-dom'
interface LinksProps {
  link:string
  route:string
  className:string
}
export const NavLinks:React.FC<LinksProps> = ({link,route,className=''}) => {
  return (
    <NavLink to={route} className={({ isActive }) => isActive ? 'text-white' : 'text-white9'}>
      <div className={`flex items-center gap-4 hover:text-white cursor-pointer transition-all font-semibold ${className}`}>
        <img className='w-6 h-6' src={`/icons/${link}.svg`} alt={`${link} icon`} />
        <span>{link}</span>
      </div>
    </NavLink>
  )
}
