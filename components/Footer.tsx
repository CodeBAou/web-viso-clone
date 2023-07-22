/* eslint-disable @typescript-eslint/semi */
import React from 'react'
import styleFooter from '../styles/footer.module.css';
import Link from 'next/link';
import Contacto from '../components/Contacto';

const Footer = (): React.JSX.Element => {
  return (
    <footer className={styleFooter.footerContent}>
      <div>

        <h4 className={styleFooter.titulos}>CONSTRUCCIONES Y ALMACENES MANUEL VISO E HIJOS S.L</h4>

        <div className={styleFooter.dataContentFooter}>
          <p className={styleFooter.values} >Todos los derechos reservados.</p>
        </div>
      </div>
      <div>

        <h4 className={styleFooter.titulos}>INFORMACION LEGAL</h4>

        <div className={styleFooter.dataContentFooter}>
            <Link className={styleFooter.values} href="/">Aviso Legal</Link>
            <Link className={styleFooter.values} href="/">Política de privacidad y protección de datos</Link>
            <Link className={styleFooter.values} href="/">Política de Cookies</Link>
        </div>
      </div>
      <div >

        <h4 className={styleFooter.titulos}>DIRECCIÓN Y CONTACTO</h4>
        <div className={styleFooter.dataContentFooter}>
          <Contacto textColor='gray'></Contacto>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
