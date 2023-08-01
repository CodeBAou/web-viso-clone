/* eslint-disable no-trailing-spaces */
/* eslint-disable @typescript-eslint/semi */
import React from 'react';
import headerStyle from '../styles/header.module.css';
import Image from 'next/image';
import Menu from './Menu';

// Font files can be colocated inside of `pages`

const Header = (): React.JSX.Element => {
  return (

    <header className={headerStyle.header}>
      <div className={headerStyle.marcaContent}>

        <div>
          <Image
            src="/VISOLOGO.png"
            width={100}
            height={50}
            alt="Picture of the author" />
        </div>

        <div className={headerStyle.tituloLogoContent}>
          <h2 className={headerStyle.tituloLogo}>  CONSTRUCCIONES Y ALMACENES MANUEL VISO E HIJOS SL.</h2>
        </div>

      </div>

      <nav className={headerStyle.menu}>

        <Menu />

      </nav>

    </header>
  )
}

export default Header
