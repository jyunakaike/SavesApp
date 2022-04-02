import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Detail } from '../pages/Detail';

import '../styles/global.css';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Detail />} />
                
            </Routes>
        </BrowserRouter>
    )
}

export default App