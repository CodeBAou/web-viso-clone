/* eslint-disable @typescript-eslint/member-delimiter-style */
/* eslint-disable eol-last */
/* eslint-disable @typescript-eslint/semi */
import React from 'react';
import styleContacto from '../styles/contacto.module.css';

interface TextColor {
  textColor: string;
}

const Contacto = (props: TextColor): React.JSX.Element => {
  return (
        <div className={styleContacto.contactoContent}>
            <p style={{ color: props.textColor }} >
                c/ Jose Luis Castro nº3 <br />
                32200 Cortegada,<br />
                Ourense.
            </p>
            <p style= {{ color: props.textColor }} >tel y fax. 988.48.30.22</p>
            <p style= {{ color: props.textColor }} >comercio@visoehijos.es</p>
            <p style= {{ color: props.textColor }} >jlalonso@visoehijos.es</p>
            <p style= {{ color: props.textColor }} >administracion@visoehijos.e</p>
        </div>
  )
}

export default Contacto;