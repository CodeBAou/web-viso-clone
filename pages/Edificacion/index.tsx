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
    './Edificacion/2003_Concello_San-Cibrao_Graderío-300x141.jpg',
    './Edificacion/2006_Concello_Padrenda_Residencia-1-300x141.jpg',
    './Edificacion/2007_Concello_A-Bola_Miniresidencia-02-300x141.jpg',
    './Edificacion/2009_Concello_Padrenda_PlanE_Edificio-300x141.jpg',
    './Edificacion/2010_Concello_Punxín_Alero-300x141.jpg',
    './Edificacion/Modificada-JR-Albergue-Castrelo-300x141.jpg',
    './Edificacion/Modificada-JR-Capilla-Padrenda-300x141.jpg'
];

const GaleriaEdificacion = (): React.JSX.Element => {
  return(
    <Layout>
         <div className={RehabilitacionStyle.content}>
            <Galeria arrImg={imagenes} w="300px"/>
         </div>
    </Layout>
  )
}

export default GaleriaEdificacion;