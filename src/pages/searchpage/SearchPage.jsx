import { useState } from 'react'
import { SearchSong } from './components'
export const SearchPage = () => {
  const [searchSong, setSearchsong] = useState('')
  const [song, setSong] = useState('')
  function handleChange(e) {
    setSong(e.target.value)
  }
  function handleSubmit(e) {
    e.preventDefault()
    setSearchsong(song)
  }
  return (
    <main className='max-w-[700px] lg:max-w-full w-full mobile:mx-auto lg:mx-0 col-start-3 col-end-8 bg-secondary overflow-auto tablet:rounded-md pt-6 px-3'>
      <header className='sticky top-0 right-0 text-sm font-medium'>
        <form onSubmit={handleSubmit} className='flex gap-4 items-center relative rounded-3xl bg-grayMain text-white px-6 py-4'>
          <div>
            <svg className="size-5 stroke-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </div>
          <label className='w-full'>
            <input value={song} onChange={handleChange} className='w-full h-full bg-transparent outline-none' id='searchSong' placeholder='What do you want to listen to?' type="text" />
          </label>
        </form>
      </header>
      <SearchSong nameSong={song} submit={searchSong} />
    </main>
  )
}