import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { Navbar } from '../Navbar';

const Layout = ({ children }) => {
    return (
        <header>
            <Header />
            {children}
            <Navbar />
        </header>
    )
}

export default Layout