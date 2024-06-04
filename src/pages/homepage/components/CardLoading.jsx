import React from 'react'

export const CardLoading = ({ loading }) => {
  return (
    <>
      {
        loading && (
          <article className='flex bg-grayMain rounded-[4px] h-[56px] overflow-hidden'>
            <div className='h-full w-14 animate-pulse'></div>
            <div className='flex-1 bg-[#181818] flex items-center'>
              <div className='h-4 w-full mobileLg:w-28 bg-grayMain ms-3 me-3 animate-pulse rounded-sm'></div>
            </div>
          </article>
        )
      }
    </>

  )
}
