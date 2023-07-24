/* eslint-disable react/no-unknown-property */
/* eslint-disable eol-last */
/* eslint-disable @typescript-eslint/semi */
import React from 'react';
import InicioStyle from '../styles/inicio.module.css';

const InicioCMP = (): React.JSX.Element => {
  return (
    <div className={InicioStyle.content}>

        <h1 className={InicioStyle.titulo}>Nosotros</h1>

        <div className={InicioStyle.contentParrafos}>
          <p>Nuestra empresa <b>CONSTRUCCIONES Y ALMACENES MANUEL VISO E HIJOS SL</b>., cimentada en la generación anterior, <b>se ha creado en el año 1987</b>, constituyendo su sede social en <b>Cortegada (Ourense)</b>.</p>
          <p>Queremos presentarnos y mostrar una parte de nuestras obras, grandes o pequeñas, todas ellas hechas con el mismo compromiso de calidad. La experiencia de la dirección de <b>VISO E HIJOS SL</b>, en las áreas de construcción de <b>obra civil</b>, <b>edificación</b> y <b>rehabilitación</b>, es muy amplia, por llevar más de 25 años ejecutando obras para el sector público y privado.</p>
          <p> Así mismo nuestras actividades también están dirigidas a la <b>venta al por mayor y minorista</b> de materiales de <b>construcción</b>, <b>ferretería</b>, <b>menaje</b>, <b>muebles</b>, <b>tapicerías</b>, <b>electrodomésticos</b>, y <b>cocina</b>. </p>
        </div>

        <div className={InicioStyle.contentMaps}>
          <iframe src="https://www.google.com/maps/embed?pb=!4v1690200509954!6m8!1m7!1sp2kJFX52ex6-3GQsQX3NZg!2m2!1d42.20781196825808!2d-8.169096289749037!3f98.10583077068864!4f-3.227115918070595!5f0.7820865974627469" width="400" height="300" loading="lazy" ></iframe>
          <iframe src="https://www.google.com/maps/embed?pb=!4v1690201047220!6m8!1m7!1sGfKDO0U8PFV8y4mBDPsBYQ!2m2!1d42.20739751809419!2d-8.16714777037428!3f133.6480889407604!4f4.4801022811668645!5f0.7820865974627469" width="400" height="300" loading="lazy" ></iframe>
        </div>

        <div className={InicioStyle.contentMaps}>
            <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1me-Hf-TKbq3aagUfK-sfMBv1WLqEIZo&ehbc=2E312F" width="640" height="480"></iframe>
        </div>
    </div>
  )
}

export default InicioCMP;
