import React from 'react'

export const GeneralCardLoading = () => {
  return (
    <>
      <article className='flex-col gap-2 p-4 pb-8 bg-[#181818] transition-all rounded-lg inline-flex group/item h-full text-white'>
        <div className='h-[180px] w-full bg-grayMain  rounded-lg overflow-hidden p-3 animate-pulse grid place-content-center'>
          <div className='h-[180px] w-[180px]'></div>
        </div>
        <div className='h-6 w-full bg-grayMain rounded-sm animate-pulse mt-2'></div>
        <div className='h-6 w-24 bg-grayMain rounded-sm animate-pulse'></div>
        <span className='text-white9 text-md mt-auto'>The Strokes</span>
      </article>
    </>
  )
}
