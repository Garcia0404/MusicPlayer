import { Navbar,Main } from './components'
export const HomePage = () => {
  
  return (
    <div className='flex lg:grid grid-cols-6 flex-1 w-full gap-2 bg-black tablet:p-2 lg:overflow-auto'>
      <Navbar/>
      <Main/>
    </div>
  )
}
