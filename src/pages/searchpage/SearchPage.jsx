import { Navbar,Main } from '../homepage/components'
export const SearchPage = () => {
  
  return (
    <div className='grid grid-cols-6 h-screen w-full gap-2 bg-black pt-10 px-2'>
      <Navbar/>
      <Main/>
    </div>
  )
}