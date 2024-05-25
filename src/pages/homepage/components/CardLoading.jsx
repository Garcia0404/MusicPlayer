import React from 'react'

export const CardLoading = ({ loading }) => {
  return (
    <>
      {
        loading && (
          <article className='flex bg-grayMain rounded-[4px] animate-pulse h-[56px] overflow-hidden'>
            <img className='w-[56px] h-full p-3 animate-pulse' src="/svg/loadingmusic.svg" alt="song" />
            <div className='flex-1 bg-[#181818] flex items-center'>
              <div className='h-4 w-28 bg-grayMain ms-3 me-3 animate-pulse rounded-sm'></div>
            </div>
          </article>
        )
      }
    </>

  )
}
