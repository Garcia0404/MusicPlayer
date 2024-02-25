import { useContext } from 'react'
import { contexto } from '../context/AppContext'

export const SliderMusic = () => {
  const { musicTime,setMusicTime } = useContext(contexto)
  function handleRangeChange(e){
    setMusicTime(e.target.value)
  }
  return (
    <div className='flex-1'>
      <style>
    {`
      .input-music::-webkit-slider-thumb {
        appearance: none;
        width: 0px;
        height: 0px;
        background-color: #888;
        border-radius: 50%;
        cursor: pointer;
      }

      .input-music {
        width: 100%;
        height: 5px;
        background: linear-gradient(to right, #09f ${musicTime}%, #ddd ${musicTime}%);
        border-radius: 5px;
        appearance: none;
        cursor: pointer;
      }
    `}
  </style>
  <label className='text-white'>
    <input 
      className='input-music'
      type="range" 
      min={0} 
      max={100} 
      value={musicTime}
      onChange={handleRangeChange}
    />
  </label>
</div>
  )
}
