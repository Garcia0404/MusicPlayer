import { useContext, useEffect } from 'react';
import { contexto } from '../context/AppContext';
import { motion } from 'framer-motion';
export const Slider = () => {
  const { volume, setVolume,ref } = useContext(contexto);
  const handleChange = (event) => {
    setVolume(parseInt(event.target.value));
  };
  useEffect(() => {
    if (ref.current) ref.current.volume = volume / 100;
  }, [volume])
  return (
    <div>
      <style>
      {`
      .input-sound::-webkit-slider-thumb {
        opacity: 0;
        appearance: none;
        width: 13px;
        height: 13px;
        background-color: #888;
        border-radius: 50%;
        cursor: pointer;
        transition-duration:100ms
      }
      .input-sound:hover::-webkit-slider-thumb{
        opacity: 1;
      }
      .input-sound {
        width: 100%;
        height: 5px;
        background: linear-gradient(to right, white ${volume}%, #4D4D4D ${volume}%);
        border-radius: 5px;
        appearance: none;
        cursor: pointer;
      }
    `}
      </style>
      <label className='text-white flex items-center'>
        <motion.input 
          className='input-sound'
          type="range" 
          min={0} 
          max={100} 
          value={volume} 
          onChange={handleChange} 
          style={{ width: '100%', height: '5px', backgroundColor: '#ddd', borderRadius: '5px', outline: 'none', appearance: 'none', cursor: 'pointer'}}
        />
      </label>
    </div>
  );
}

