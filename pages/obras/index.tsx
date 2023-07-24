/* eslint-disable eol-last */
/* eslint-disable @typescript-eslint/semi */
/* eslint-disable @typescript-eslint/keyword-spacing */
// eslint-disable-next-line @typescript-eslint/semi
import React from 'react';
import ObrasCmp from '../../components/Obras';
import Layout from '../layout';

const Obras = (): React.JSX.Element => {
  return(
    <Layout>
        <ObrasCmp/>
    </Layout>
  )
}

export default Obras;