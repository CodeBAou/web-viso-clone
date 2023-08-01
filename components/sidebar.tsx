/* eslint-disable @typescript-eslint/semi */
/* eslint-disable eol-last */
import React, { useState } from 'react';
import SidebarStyle from '../styles/sidebar.module.css';
import Contacto from '../components/Contacto';
import Link from 'next/link';
import Menu from './Menu';

const Sidebar = (): React.JSX.Element => {

  const [classAnimationMenu, setClassAnimationMenu] = useState(SidebarStyle.content);
  const [stateMenu, setStateMenu] = useState(false); //Indica si el menu esta abierto

  const openMenu = () => {

    document.getElementById('iconMenuFN')?.addEventListener('click', () => {

      if (stateMenu == false) {
        setClassAnimationMenu(SidebarStyle.openMenu);
        setStateMenu(true);
      } else {
        setClassAnimationMenu(SidebarStyle.closeMenu);
        setStateMenu(false);
      }
    })
  }

  return (
    <div className={classAnimationMenu}>

      <img id='iconMenuFN' className={SidebarStyle.menuIcon} src="./icons/menu.svg" alt="menu" onClick={openMenu} s />

      <h3 className={SidebarStyle.tituloMenuSidebar}>Menu</h3>

      <div className={SidebarStyle.menuContent}>
        <Menu />
      </div>

      <img src="/Sellos_Calidad.jpg" alt="sello ican de calidad" className={SidebarStyle.sello} />

      <h3 className={SidebarStyle.tituloGaleria}>Galeria</h3>

      <nav className={SidebarStyle.menuGaleriaContent}>
        <Link href="/galeria_maquinaria">Maquinaria</Link>
        <Link href="/galeria_obras">Obras Públicas</Link>
        <Link href="/galeria_rehabilitacion">Rehabilitacion</Link>
        <Link href="/Edificacion">Edificacion</Link>
        <Link href="/tienda">Tienda</Link>
      </nav>

      <h3 className={SidebarStyle.tituloGaleria}>Contacto</h3>
      <Contacto textColor="black" />

    </div>
  )
}

export default Sidebar;