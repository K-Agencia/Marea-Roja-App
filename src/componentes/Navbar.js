import React from 'react';
import { RouterLink } from '../constantes/RoutersLinks';
import '../css/Navbar.css';

const Navbar = () => {

   let patname = window.location.pathname;
   return (
      <nav className='Navbar'>
         <div className='tituloApp'>
            <h1>App Droguerias</h1>
         </div>
         <div className='SeccionesApp'>
            <div>
               <h2>Farmacias</h2>
               <div>
                  <a href={RouterLink.Farmacias} className={patname === RouterLink.Farmacias && "active"}>
                     Estrategias de exhibición
                  </a>
               </div>
            </div>
            <div>
               <h2>Droguerias</h2>
               <div>
                  <a href={RouterLink.Droguerias} className={patname === RouterLink.Droguerias && "active"}>
                     Estrategias de exhibición
                  </a>
               </div>
            </div>
         </div>
      </nav>
   );
};

export default Navbar;