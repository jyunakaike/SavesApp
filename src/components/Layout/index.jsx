import React from 'react';
import { Header } from '../Header';

const Layout = ({ children }) => {
    return (
        <header>
            <Header />
            {children}
        </header>
    )
}

export default Layout