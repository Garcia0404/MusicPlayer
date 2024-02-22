import { useContext } from 'react';
import { contexto } from '../context/AppContext';

export const Slider = () => {
  const { volume, setVolume } = useContext(contexto);
  const handleChange = (event) => {
    setVolume(parseInt(event.target.value));
  };

  return (
    <div>
      <style>
        {`
          input[type="range"]::-webkit-slider-thumb {
            appearance: none;
            width: 13px;
            height: 13px;
            background-color: #888; /* Cambia el color del thumb a gris */
            border-radius: 50%;
            cursor: pointer;
          }
        `}
      </style>
      <div className='text-white'>
        <input 
          type="range" 
          min={0} 
          max={100} 
          value={volume} 
          onChange={handleChange} 
          style={{ width: '100%', height: '5px', backgroundColor: '#ddd', borderRadius: '5px', outline: 'none', appearance: 'none', cursor: 'pointer'}}
        />
      </div>
    </div>
  );
}

