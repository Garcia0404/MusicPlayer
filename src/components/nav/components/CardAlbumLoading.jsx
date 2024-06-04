import React from 'react'

export const CardAlbumLoading = ({ loading }) => {
  return (
    <>
      {
        loading && (
          <article className='flex rounded-md p-2 gap-3 cursor-pointer'>
            <div className='p-2 h-12 w-12 bg-grayMain rounded-md overflow-hidden animate-pulse'>
              <div className='w-8 h-8'></div>
            </div>
            <main className='flex flex-col flex-1 gap-2 justify-center'>
              <div className='bg-grayMain h-4 w-44 rounded-sm animate-pulse'></div>
              <div className='bg-grayMain h-4 w-32 rounded-sm animate-pulse'></div>
            </main>
          </article>
        )
      }
    </>
  )
}
