import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { Navbar } from '../Navbar';

const Layout = ({ children, active, setActive }) => {
    return (
        <header>
            <Header />
            {children}
            <Navbar active={active} setActive={setActive} />
        </header>
    )
}

export default Layout