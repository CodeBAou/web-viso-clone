/* eslint-disable eol-last */
/* eslint-disable @typescript-eslint/semi */
/* eslint-disable @typescript-eslint/indent */
import React from 'react';
import PoliticaCmp from '../../components/Politica';
import Layout from '../layout';

const PoliticaPage = (): React.JSX.Element => {
    return(
        <Layout>
            <PoliticaCmp/>
        </Layout>
      )
}

export default PoliticaPage;