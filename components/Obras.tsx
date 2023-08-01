/* eslint-disable @typescript-eslint/keyword-spacing */
/* eslint-disable eol-last */
/* eslint-disable @typescript-eslint/semi */
import React from 'react';
import ObrasStyle from '../styles/obras.module.css';
import Galeria from './Galeria';

const imgObras = [
  '/Obras/DSCF1593-300x225.jpg',
  '/Obras/DSCF1625-300x225.jpg',
  '/Obras/DSCF1646-300x225.jpg',
  '/Obras/residencia-300x188.jpg'
];

const ObrasCmp = (): React.JSX.Element => {
  return(
    <div className={ObrasStyle.content}>

        <h1 className={ObrasStyle.titulo}>Obras</h1>

        <div className={ObrasStyle.contentParrafos}>
            <p>Para las obras de <b>Ingeniería</b>, <b>Edificación</b> y <b>Rehabilitación</b>, en las que siempre actuamos como contratista principal, disponemos en propiedad de un amplio parque de <b>maquinaria</b>, así como <b>equipos y medios auxiliares</b>.</p>
            <p>Nuestro equipo humano, ampliamente cualificado, pondrá a su disposición toda su experiencia, para ofrecerle un servicio serio, centrado en la calidad, plazo y coste de la obra, adaptándose a las necesidades del cliente y desarrollando constantemente nuevas soluciones para anticiparse a las cambiantes necesidades del mercado</p>
            <p>En <b>VISO E HIJOS</b> estamos comprometidos con la mejora continua en todas las actividades y procesos desarrollados por la Empresa, para lo cual tenemos establecido un sistema de Gestión de Calidad basado en la Norma UNE-EN ISO 9001:2008, y un sistema de Gestión Medioambiental basado en la Norma UNE-EN ISO 14001:2004</p>
        </div>

        <Galeria w="300px" arrImg={imgObras}/>

    </div>
  )
}

export default ObrasCmp;