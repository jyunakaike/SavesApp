import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// components
import Layout from '../components/Layout';

// pages
import { Detail } from '../pages/Detail';
import { Expense } from '../pages/Expense';
import { Income } from '../pages/Income';

// db
import { collection, getDocs, add } from "firebase/firestore";
import { db } from '../db/firebase';



import '../styles/global.css';

const App = () => {
    const [active, setActive] = useState("");

    let dateTime = new Date()
            let day = dateTime.getDate()
            let month = dateTime.getMonth() + 1
            let year = dateTime.getFullYear()
            let date = '';

    const [dateState, setDateState] = useState();

    useEffect(() => {
        const getList = async () => {
            const list = await getDocs(collection(db, "detail"));
            list.forEach(doc => {
                // console.log(`${doc.id} == ${doc.}`)
                console.log(doc.data())
            })
        }
        const getDate = () => {
            if (month < 10) {
                date = `${day}/0${month}/${year}`
                setDateState(date)
            }
            else {
                date = `${day}/${month}/${year}`
                setDateState(date)
            }
        }
        getDate();
        getList();
    }, []);

    return (
        <BrowserRouter>
            <Layout active={active} setActive={setActive}>
                <Routes>
                    <Route exact path='/' element={<Detail setActive={setActive} />} />
                    <Route exact path='/expense' element={<Expense setActive={setActive} dateState={dateState} />} />
                    <Route exact path='/incomes' element={<Income setActive={setActive} />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export default App