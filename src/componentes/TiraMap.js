import React from 'react';

const TiraMap = ({ titulo, imagen }) => {
   return (
      <div className='TiraMap'>
         <h1 className='titulo'>{titulo}</h1>
         {imagen.map((item, index) => (
            <div key={index}>
               <img src={item.imgSlider} alt="" />
            </div>
         ))}
      </div>
   );
};

export default TiraMap;