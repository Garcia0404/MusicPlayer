import { useContext } from "react";
import { contexto } from "../context/AppContext";

export const SliderMusic = () => {
  const { sliderTime,ref } = useContext(contexto)
  function handleTime(e) {
    if(ref.current) {
      const durationSong = ref.current.duration
      ref.current.currentTime = parseFloat(e.target.value * durationSong / 100)
    }
  }

  return (
    <div className='flex-1'>
      <style>
      {`
      .input-time::-webkit-slider-thumb {
        opacity: 0;
        appearance: none;
        width: 13px;
        height: 13px;
        background-color: #888;
        border-radius: 50%;
        cursor: pointer;
        transition-duration:100ms
      }
      .input-time:hover::-webkit-slider-thumb{
        opacity: 1;
      }
      .input-time {
        width: 100%;
        height: 5px;
        background: linear-gradient(to right, white ${sliderTime}%, #4D4D4D ${sliderTime}%);
        border-radius: 5px;
        appearance: none;
        cursor: pointer;
      }
    `}
      </style>
      <label className='text-white flex items-center'>
        <input 
          className='input-time'
          type="range" 
          min={0} 
          max={100} 
          value={sliderTime} 
          onChange={handleTime} 
          style={{ width: '100%', height: '5px', backgroundColor: '#ddd', borderRadius: '5px', outline: 'none', appearance: 'none', cursor: 'pointer'}}
        />
      </label>
    </div>
  );
}
