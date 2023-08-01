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
    './rehabilitacion/1999_Concello_Padrenda_Capilla-300x141.jpg',
    './rehabilitacion/2003_Concello_Padrenda_Centro-Parroquial-300x141.jpg',
    './rehabilitacion/2006_Concello_San-Cibrao_Boutureira-300x141.jpg',
    './rehabilitacion/2007_Concello_Celanova_Vilanova-02-300x141.jpg',
    './rehabilitacion/2008_Concello_Cartelle_Cartelle-300x141.jpg',
    './rehabilitacion/2008_Concello_Cartelle_Teixugueiras-300x141.jpg',
    './rehabilitacion/2009_Concello_Padrenda_PlanE_Entorno-300x141.jpg',
    './rehabilitacion/2009_Concello_San-Cibrao_Edificio-Penedo-300x141.jpg',
    './rehabilitacion/2010_Concello_Punxín_Alero-300x141.jpg'
];

const GaleriaRehabilitacion = (): React.JSX.Element => {
  return(
    <Layout>
         <div className={RehabilitacionStyle.content}>
            <Galeria arrImg={imagenes} w="300px"/>
         </div>
    </Layout>
  )
}

export default GaleriaRehabilitacion;