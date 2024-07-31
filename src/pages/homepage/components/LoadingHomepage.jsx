import React from 'react'
import { CardAlbumLoading } from '../../../components'
import { CardLoading } from './CardLoading'
import { GeneralCardLoading } from './GeneralCardLoading'

export const LoadingHomepage = () => {
  return (
    <div className='lg:grid grid-cols-6 h-screen bg-black min-[610px]:p-2 gap-2'>
      <div className='col-start-1 col-end-3 hidden flex-col gap-2 lg:flex'>
        <div className='h-[168px] bg-[#121212] rounded-md p-6 flex flex-col gap-6'>
          <div className='w-28 bg-grayMain h-6 animate-pulse'></div>
          <div className='w-28 bg-grayMain h-6 animate-pulse'></div>
          <div className='w-28 bg-grayMain h-6 animate-pulse'></div>
        </div>
        <div className='flex-1 bg-[#121212] rounded-md'>
          <div className='p-6'>
            <div className='w-28 bg-grayMain h-6 animate-pulse'></div>
          </div>
          <div className='px-6'>
            <div>
              <CardAlbumLoading/>
              <CardAlbumLoading/>
              <CardAlbumLoading/>
              <CardAlbumLoading/>
              <CardAlbumLoading/>
              <CardAlbumLoading/>
            </div>
          </div>
        </div>
      </div>
      <div className='max-w-[700px] lg:max-w-full w-full mobile:mx-auto lg:mx-0 col-start-3 col-end-8 bg-secondary overflow-auto mx-auto tablet:rounded-md'>
        <div className='pt-10 px-6 pb-4 grid gap-3'>
          <h1 className="font-bold text-3xl mb-3 text-white">Welcome !</h1>
          <div className='grid grid-cols-2 mobileLg:grid-cols-mainH gap-3'>
            <CardLoading/>
            <CardLoading/>
            <CardLoading/>
            <CardLoading/>
            <CardLoading/>
            <CardLoading/>
          </div>
        </div>
        <div className='p-6'>
          <h2 className="text-white text-xl font-semibold col-start-1 col-end-[-1] pb-2">Heard Recently</h2>
          <div className='grid gap-2 mobileLg:grid-cols-mainH'>
            <GeneralCardLoading/>
            <GeneralCardLoading/>
            <GeneralCardLoading/>
            <GeneralCardLoading/>
            <GeneralCardLoading/>
            <GeneralCardLoading/>
          </div>
        </div>
      </div>
    </div>
  )
}
