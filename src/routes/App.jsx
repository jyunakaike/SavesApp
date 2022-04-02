import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Detail } from '../pages/Detail';
import  Layout  from '../components/Layout';

import '../styles/global.css';

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route exact path='/' element={<Detail />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export default App