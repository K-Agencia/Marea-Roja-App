import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../paginas/Home';
import { RouterLink } from '../constantes/RoutersLinks';
import { ImgSliders, TirasLargas } from '../constantes/Imagenes';
import Tiras from '../componentes/Tiras';
import TiraMap from '../componentes/TiraMap';

const RouterDom = () => {
   return (
      <div>
         {/* <Navbar /> */}
         <Routes>
            <Route exact path={RouterLink.Droguerias} element={
               <Home titulo={"Estrategias de exhibición Droguerías"} imagenes={ImgSliders.Droguerias} />}
            />
            <Route exact path={RouterLink.Farmacias} element={
               <Home titulo={"Estrategias de exhibición Farmacias"} imagenes={ImgSliders.Farmacias} />}
            />
            <Route exact path={RouterLink.PlanInvencibles} element={
               <Home titulo={"Plan invencibles 4Q 2022"} imagenes={ImgSliders.PlanInvencibles} />}
            />
            <Route exact path={RouterLink.PreciosSugeridos} element={
               <Tiras titulo={"Precios de venta sugeridos al público"} imagen={TirasLargas.Tira_PreciosVenta} />}
            />
            <Route exact path={RouterLink.Portafolio} element={
               <TiraMap titulo={"Catálogo de productos - Droguerias"} imagen={ImgSliders.Portafolio} />}
            />
            <Route exact path={RouterLink.Infografia} element={
               <Tiras titulo={""} imagen={TirasLargas.infografia} />}
            />
            <Route path="*" replace element={
               <Navigate to={RouterLink.Droguerias} replace />
            }
            />
         </Routes>
      </div>
   );
};

export default RouterDom;