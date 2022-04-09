import { addDoc, collection } from 'firebase/firestore';
import React, { useEffect, useRef } from 'react';
import "./style.css";

// firestore
import { db } from '../../db/firebase';

export const Expense = ({ setActive, dateState }) => {
  useEffect(() => {
    setActive("3")
  }, []);

  const expenseInput = useRef(null);

  const handleSubmit = () => {
    const expenseformData = new FormData(expenseInput.current);

    const buyer = {
      'funds': expenseformData.get('funds'),
      'description': expenseformData.get('description'),
      'date': dateState,
      'type': 'expense'
    };

    console.log(buyer)
    // try {
    //   const buyer = addDoc(collection(db, "detail"), {
    //     'funds': expenseformData.get('funds'),
    //     'description': expenseformData.get('description'),
    //     'date': dateState,
    //     'type':'expense'
    //   });
    //   console.log("Document written with Id", buyer)
    // }
    // catch (e) {
    //   console.error('error adding document', e)
    // }
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
            <div><input type="number" name='funds' /></div>
            <div><h3>Description</h3></div>
            <div><input type="text" name='description' /></div>

          </form>
          <div className={'Expense-container-save'}>
            <button type='button' onClick={handleSubmit}>Save</button>
          </div>
        </div>
      </main>
    </section>
  )
}
