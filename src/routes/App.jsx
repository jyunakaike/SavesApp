import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// components
import  Layout  from '../components/Layout';

// pages
import { Detail } from '../pages/Detail';
import { Expense } from '../pages/Expense';
import { Income } from '../pages/Income';



import '../styles/global.css';

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route exact path='/' element={<Detail />} />
                    <Route exact path='/expense' element={<Expense />} />
                    <Route exact path='/incomes' element={<Income />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export default App