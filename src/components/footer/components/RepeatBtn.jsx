import React, { useContext, useEffect } from 'react'
import { contexto } from '../../../context/AppContext'

export const RepeatBtn = () => {
  const { repeat, setRepeat,ref } = useContext(contexto)
  const change = repeat ? 'block' : 'hidden'
  const changeIcon = repeat ? 'fill-greenMain' : 'fill-white9 hover:fill-white'
  function handleClick() {
    setRepeat(!repeat)
  }
  useEffect(() => {
    if (ref.current) {
      ref.current.loop = repeat
    }
  }, [repeat])
  return (
    <span onClick={handleClick} className='relative active:scale-75 transition-all'>
      <svg className={`${changeIcon} size-4 hover:scale-110 cursor-pointer transition-all`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="M0 224c0 17.7 14.3 32 32 32s32-14.3 32-32c0-53 43-96 96-96H320v32c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l64-64c12.5-12.5 12.5-32.8 0-45.3l-64-64c-9.2-9.2-22.9-11.9-34.9-6.9S320 19.1 320 32V64H160C71.6 64 0 135.6 0 224zm512 64c0-17.7-14.3-32-32-32s-32 14.3-32 32c0 53-43 96-96 96H192V352c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9l-64 64c-12.5 12.5-12.5 32.8 0 45.3l64 64c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V448H352c88.4 0 160-71.6 160-160z" />
      </svg>
      <span className={`${change} bg-greenMain w-1.5 h-1.5 rounded-full absolute left-1/2 transform -translate-x-1/2 mt-1`}></span>
    </span>
  )
}
