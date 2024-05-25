import { useState } from 'react'
import { Navbar } from '../homepage/components'
import { SearchSong } from './components'
export const SearchPage = () => {
  const [ searchSong,setSearchsong ] = useState('')
  const [ song,setSong ] = useState('')
  function handleChange(e){
    setSong(e.target.value)
  }
  function handleSubmit(e){
    e.preventDefault()
    setSearchsong(song)
  }
  return (
    <div className='flex lg:grid grid-cols-6 flex-1 w-full gap-2 bg-black tablet:p-2 lg:overflow-auto'>
      <Navbar />
      <main className='max-w-[700px] lg:max-w-full w-full mobile:mx-auto lg:mx-0 col-start-3 col-end-8 bg-secondary overflow-auto tablet:rounded-md p-3'>
        <header className='sticky top-0 right-0 text-sm font-medium'>
          <form onSubmit={handleSubmit} className='flex relative m-3'>
            <div className='absolute top-0 left-0 my-4 mx-3'>
              <svg className="w-5 h-5 stroke-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </div>
            <label htmlFor="searchSong" className='hidden'></label>
            <input value={song} onChange={handleChange} className='w-full h-full ps-10 py-5 pe-5 rounded-3xl bg-grayMain text-white' id='searchSong' placeholder='What do you want to listen to?' type="text" />
          </form>
        </header>
        <SearchSong nameSong={song} submit={searchSong}/>
      </main>
    </div>
  )
}