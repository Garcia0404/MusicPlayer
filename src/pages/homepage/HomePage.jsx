import { Navbar,Main } from './components'
export const HomePage = () => {
  
  return (
    <div className='flex lg:grid grid-cols-6 flex-1 w-full gap-2 bg-black mobileLg:pt-2 mobileLg:px-2 lg:overflow-auto'>
      <Navbar/>
      <Main/>
    </div>
  )
}
