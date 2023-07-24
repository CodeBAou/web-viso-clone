/* eslint-disable eol-last */
/* eslint-disable @typescript-eslint/semi */
/* eslint-disable @typescript-eslint/keyword-spacing */
// eslint-disable-next-line @typescript-eslint/semi
import React from 'react';
import MaquinariaCmp from '../../components/Maquinaria';
import Layout from '../layout';

const Maquinaria = (): React.JSX.Element => {
  return(
    <Layout>
        <MaquinariaCmp/>
    </Layout>
  )
}

export default Maquinaria;