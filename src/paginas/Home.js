import React from 'react';
import Sliders from '../componentes/Sliders';

const Home = ({titulo, imagenes}) => {
   return (
      <div className='Home'>
         <h1 className='titulo'>{titulo}</h1>
         <Sliders listImg={imagenes} />
      </div>
   );
};

export default Home;