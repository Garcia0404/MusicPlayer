import { NavLinksMobile } from './components'

export const NavbarMobile = () => {
  const links =[
    ['Home','/'],
    ['Search','/search'],
    ['Albums','/albums'],
    ['Favorites','/favorites']
  ]
  return (
    <nav className='tablet:hidden w-full h-16 bg-[rgba(0,0,0,0.8)] backdrop-blur-md flex justify-center sticky bottom-0 right-0 z-50'>
      <div className='flex gap-5 mobileLg:gap-8 py-2 mobileLg:p-4 items-center'>
        {
          links.map((link,index)=> (
            <NavLinksMobile key={index} name={link[0]} route={link[1]}/>
          ))
        }
      </div>
    </nav>
  )
}
