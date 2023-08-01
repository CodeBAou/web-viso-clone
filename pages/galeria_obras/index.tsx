/* eslint-disable @typescript-eslint/indent */
/* eslint-disable eol-last */
/* eslint-disable @typescript-eslint/semi */
/* eslint-disable @typescript-eslint/keyword-spacing */
// eslint-disable-next-line @typescript-eslint/semi
import React from 'react';
import Layout from '../layout';
import Galeria from '../../components/Galeria';
import RehabilitacionStyle from '../../styles/galeriaRehabilitacion.module.css';

const imagenes = [
    './obrasPublicas/2002_Concello_Celanova_Venezuela-300x141.jpg',
    './obrasPublicas/2003_Deputación_Ribadavia_A-Foz-300x141.jpg',
    './obrasPublicas/2003_Deputación_Ribadavia_Valdepereira-300x141.jpg',
    './obrasPublicas/2005_Concello_Celanova_Inferior-300x141.jpg',
    './obrasPublicas/2005_Concello_Celanova_Rotonda-300x141.jpg',
    './obrasPublicas/2009_Concello_Celanova_PlanE_PistaPolPol-300x141.jpg',
    './obrasPublicas/2009_Concello_Cortegada_Area-Termal-300x141.jpg',
];

const GaleriaObrasPublicas = (): React.JSX.Element => {
  return(
    <Layout>
         <div className={RehabilitacionStyle.content}>
            <Galeria arrImg={imagenes} w="300px"/>
         </div>
    </Layout>
  )
}

export default GaleriaObrasPublicas;