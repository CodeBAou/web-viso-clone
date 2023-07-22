/* eslint-disable no-trailing-spaces */
/* eslint-disable @typescript-eslint/semi */
import React from 'react'
import Link from 'next/link';
import headerStyle from '../styles/header.module.css';
import Image from 'next/image';

// Font files can be colocated inside of `pages`

const Header = (): React.JSX.Element => {
  return (
    <header>
      <div className={headerStyle.marcaContent}>
        <div>
          <Image
            src="/VISOLOGO.png"
            width={100}
            height={50}
            alt="Picture of the author" />
        </div>
        <div>
          <h2 className={ headerStyle.tituloLogo }>  CONSTRUCCIONES Y ALMACENES MANUEL VISO E HIJOS SL.</h2>
      </div>
    </div>
    <nav className={headerStyle.menu}>
        <Link className={headerStyle.intenMenu} href="/">Inicio</Link>
        <Link className={headerStyle.intenMenu} href="/obras">Obras</Link>
        <Link className={headerStyle.intenMenu} href="/maquinaria">Maquinaria</Link>
        <Link className={headerStyle.intenMenu} href="/politica">Politica de calidad y medio ambiente</Link>
     </nav>
    </header>
  )
}

export default Header
