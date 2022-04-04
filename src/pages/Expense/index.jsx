import React, { useEffect } from 'react';
import "./style.css";

export const Expense = ({ setActive }) => {

  useEffect(() => {
    setActive("3")
  }, []);


  return (
    <section className={'Expense-container-section'}>
      <main>
        <header className={'Expense-header'}>
          <h2>Add Expense</h2> 
        </header>
        <div className={'Expense-container'}>
          <div className={'Expense-container-detail'}>
            <div><h3>Funds (Expense)</h3></div>
            <div><input type="text" /></div>
            <div><h3>Description</h3></div>
            <div><input type="text" /></div>
          </div>
          <div className={'Expense-container-save'}>
            <button>Save</button>
          </div>
        </div>
      </main>
    </section>
  )
}
