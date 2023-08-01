/* eslint-disable @typescript-eslint/semi */
/* eslint-disable eol-last */
import React from 'react';
import MaquinariaStyle from '../styles/maquinaria.module.css';
import Image from 'next/image';

const Maquinaria = (): React.JSX.Element => {
  return(
        <div className={MaquinariaStyle.content}>

            <h1 className={MaquinariaStyle.titulo}>Maquinaria</h1>

            <div className={MaquinariaStyle.contentParrafos}>
                <p>En <b>CONSTRUCCIONES Y ALMACENES MANUEL VISO E HIJOS SL</b>., disponemos en propiedad de un amplio parque de maquinaria, tanto pesada como ligera, así como los medios de transporte necesarios para ubicarla en cualquier punto de las obras.</p>
                <p>En nuestra Nave-Almacén, se hace el mantenimiento de los vehículos y maquinaria por personal especializado, y con el compromiso de una correcta gestión de los residuos según lo establecido en el sistema de Gestión Medioambiental basado en la <b>Norma UNE-EN ISO 14001:2004</b></p>
                <p>Hacemos una breve reseña fotográfica del Parque de Maquinaria Pesada, que constantemente se renueva y adapta a las necesidades de cada obra.</p>
            </div>

            <Image
                src="/Maquinaria/qqw.jpg"
                width={800}
                height={500}
                alt="Picture of the author"
            />

        </div>
  )
}
// eslint-disable-next-line @typescript-eslint/semi
export default Maquinaria;