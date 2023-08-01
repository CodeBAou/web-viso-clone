/* eslint-disable @typescript-eslint/indent */
/* eslint-disable eol-last */
/* eslint-disable @typescript-eslint/semi */
/* eslint-disable @typescript-eslint/keyword-spacing */
// eslint-disable-next-line @typescript-eslint/semi
import React from 'react';
import Layout from '../layout';
import Galeria from '../../components/Galeria';
import MaquinariaStyle from '../../styles/galeriaRehabilitacion.module.css';

const imagenes = [
    './Maquinaria/4-UD.-RETROCARGADORAS-HIDROMEK.jpg',
    './Maquinaria/33-Wacker.d2-300x180.jpg',
    './Maquinaria/BARREDORA-300x180.jpg',
    './Maquinaria/CAMIÓN-BASCULANTE-RENAULT-300x180 (1).jpg',
    './Maquinaria/CAMIÓN-BASCULANTE-RENAULT-300x180.jpg',
    './Maquinaria/CAMIÓN-BASCULANTE-RENAULT-KERAX-300x180.jpg',
    './Maquinaria/CAMIÓN-RENAULT-CON-GRÚA-300x180.jpg',
    './Maquinaria/CAMIÓN-TRACTOR-DAF-FT-95-430.jpg',
    './Maquinaria/dumper1-300x180.jpg',
    './Maquinaria/MINIPALAS-300x180.jpg',
    './Maquinaria/MINIPALAS2-300x180.jpg',
    './Maquinaria/MINIPALAS3-300x180.jpg',
    './Maquinaria/minipalas4-300x180.jpg',
    './Maquinaria/MOTONIVELADORA-ZOOMLION-300x180.jpg',
    './Maquinaria/PALA-CARDADORA-1-300x180.jpg',
    './Maquinaria/PALA-CARDADORA-2.jpg',
    './Maquinaria/RETROCARGADORA-HYUNDAI-R2000W3-300x180.jpg',
    './Maquinaria/RETROEXCAVADORA-HITACHI-ZX-350-3-300x180.jpg',
    './Maquinaria/RODILLO-PISÓN-300x180.jpg',
    './Maquinaria/SEMI-REMOLQUE-BAÑERA-300x180.jpg',
    './Maquinaria/SEMI-REMOLQUE-GÓNDOLA-300x180.jpg'
];

const GaleriaMaquinaria = (): React.JSX.Element => {
  return(
    <Layout>
         <div className={MaquinariaStyle.content}>
            <Galeria arrImg={imagenes} w="300px"/>
         </div>
    </Layout>
  )
}

export default GaleriaMaquinaria;