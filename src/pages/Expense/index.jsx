import React, { useEffect, useRef } from 'react';
import { addData } from '../../services/service';

import "./style.css";

export const Expense = ({ setActive, dateState }) => {
  useEffect(() => {
    setActive("3")
  }, []);

  const expenseInput = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault()
    const expenseformData = new FormData(expenseInput.current);
    const funds = Number(parseFloat(expenseformData.get('funds')).toFixed(2))
    const description = expenseformData.get('description')
    const type = 'expense'
    try {
      addData(funds, description ,type)
    }
    catch (e) {
      console.error('error adding document', e)
    }
    expenseInput.current.reset();
  }

  return (
    <section className={'Expense-container-section'}>
      <main>
        <header className={'Expense-header'}>
          <h2>Add Expense {dateState}</h2>
        </header>
        <div className={'Expense-container'} >
          <form className={'Expense-container-detail'} ref={expenseInput} >
            <div><h3>Funds (Expense)</h3></div>
            <div><input type="number" name='funds' autoComplete="off" /></div>
            <div><h3>Description</h3></div>
            <div><input type="text" name='description' autoComplete="off" /></div>

          </form>
          <div className={'Expense-container-save'}>
            <button type='button' onClick={handleSubmit}>Save</button>
          </div>
        </div>
      </main>
    </section>
  )
}

