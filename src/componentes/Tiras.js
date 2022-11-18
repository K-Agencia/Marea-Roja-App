import React from 'react';

const Tiras = ({titulo, imagen}) => {
   return (
      <div className='Tiras'>
         <h1 className='titulo'>{titulo}</h1>
         <img src={imagen} alt="" />
      </div>
   );
};

export default Tiras;