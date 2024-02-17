import { Navbar,Main } from './components'
export const HomePage = () => {
  
  return (
    <div className='grid grid-cols-6 flex-1 w-full gap-2 bg-black pt-10 px-2'>
      <Navbar/>
      <Main/>
    </div>
  )
}
