import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// components
import  Layout  from '../components/Layout';

// pages
import { Detail } from '../pages/Detail';
import { Expense } from '../pages/Expense';
import { Income } from '../pages/Income';



import '../styles/global.css';

const App = () => {
    const [active, setActive] = useState("");

    return (
        <BrowserRouter>
            <Layout active={active} setActive={setActive}>
                <Routes>
                    <Route exact path='/' element={<Detail setActive={setActive} />} />
                    <Route exact path='/expense' element={<Expense setActive={setActive} />} />
                    <Route exact path='/incomes' element={<Income setActive={setActive} />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export default App