import React from 'react';
import Link from 'next/link';
import MenuStyle from '../styles/menu.module.css';

const Menu = (): React.JSX.Element => {

    return(
        <>
            <Link className={MenuStyle.intenMenu} href="/">Inicio</Link>
            <Link className={MenuStyle.intenMenu} href="/obras">Obras</Link>
            <Link className={MenuStyle.intenMenu} href="/maquinaria">Maquinaria</Link>
            <Link className={MenuStyle.intenMenu} href="/politica">Politica de calidad y medio ambiente</Link>
        </>
    )
}

export default Menu;