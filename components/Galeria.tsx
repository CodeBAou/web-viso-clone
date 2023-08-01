/* eslint-disable @typescript-eslint/keyword-spacing */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/member-delimiter-style */
/* eslint-disable eol-last */
/* eslint-disable @typescript-eslint/semi */
import React, { useEffect, useState } from 'react';
import GaleriaEstilo from '../styles/Galeria.module.css';

interface ArrImgI {
  arrImg: string[];
  w: string
}

// eslint-disable-next-line padded-blocks
const Galeria = (props: ArrImgI): React.JSX.Element => {

  const [imagenes, setImagen] = useState(props.arrImg);
  const listItems = imagenes.map((item) =>
       <img width={props.w} src={item} alt="imagen obra" key={item}></img>
  );

  return(
        <div className={GaleriaEstilo.content}>
            {listItems}
        </div>
  )
}

export default Galeria;