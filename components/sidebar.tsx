/* eslint-disable @typescript-eslint/semi */
/* eslint-disable eol-last */
import React from 'react';
import sidebarStyle from '../styles/sidebar.module.css';
import Contacto from '../components/Contacto';
import Link from 'next/link';

const Sidebar = (): React.JSX.Element => {
  return (
        <div className={sidebarStyle.contactoContent}>
            <img src="/Sellos_Calidad.jpg" alt="sello ican de calidad" className={sidebarStyle.sello}/>

            <h3 className={sidebarStyle.tituloGaleria}>Galeria</h3>

            <nav className={sidebarStyle.menuGaleriaContent}>
              <Link href="/">Maquinaria</Link>
              <Link href="/">Obras Públicas</Link>
              <Link href="/">Rehabilitacion</Link>
              <Link href="/">Edificacion</Link>
              <Link href="/">Tienda</Link>
            </nav>
            <h3 className={sidebarStyle.tituloGaleria}>Contacto</h3>
            <Contacto textColor="black"/>

        </div>
  )
}

export default Sidebar;