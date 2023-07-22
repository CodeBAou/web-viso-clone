/* eslint-disable @typescript-eslint/indent */
/* eslint-disable eol-last */
/* eslint-disable @typescript-eslint/semi */
import React, { type ReactNode } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/sidebar';

/* Definir type para children */
interface LayoutProps {
    children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Header></Header>
            <main>
                {children}
            </main>
            <Sidebar/>
            <Footer></Footer>
        </>

    );
};
export default Layout;