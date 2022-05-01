import React, { useState, useEffect, useContext } from 'react';
import AppContext from '../../context/AppContext';

import './style.css';

export const Detail = ({ setActive }) => {
  const { state, getList } = useContext(AppContext);

  const [year, setYear] = useState(2022);
  const months = [{ id: 1, name: 'Enero' }, { id: 2, name: 'Febrero' }, { id: 3, name: 'Marzo' }, { id: 4, name: 'Abril' }, { id: 5, name: 'Mayo' }, { id: 6, name: 'Junio' }, { id: 7, name: 'Julio' }, { id: 8, name: 'Agosto' }, { id: 9, name: 'Septiembre' }, { id: 10, name: 'Octubre' }, { id: 11, name: 'Noviembre' }, { id: 12, name: 'Diciembre' }]
  // const [months, setMonths] = useState([{ id: 1, name: 'Enero' }, { id: 2, name: 'Febrero' }, { id: 3, name: 'Marzo' }, { id: 4, name: 'Abril' }, { id: 5, name: 'Mayo' }, { id: 6, name: 'Junio' }, { id: 7, name: 'Julio' }, { id: 8, name: 'Agosto' }, { id: 9, name: 'Septiembre' }, { id: 10, name: 'Octubre' }, { id: 11, name: 'Noviembre' }, { id: 12, name: 'Diciembre' }]);
  const [total, setTotal] = useState();

  // get Datenow 
  const dateNow = new Date()

  //get totalBalanc
  const balanceCount = () => {
    if (state != undefined) {
      const a = state
        .map((item) => [item.type, item.funds])
        .reduce((obj, item) => {
          if (!obj[item[0]]) {
            // console.log(item[1]);
            obj[item[0]] = item[1];
          }
          else {
            obj[item[0]] = obj[item[0]] + item[1];
          }
          return obj
        }, {})
      // console.log(a);
      setTotal(a)
    }
  }

  useEffect(() => {
    setActive("")
    // getList get the state 
    setYear(dateNow.getFullYear())
    getList()
  }, [])

  useEffect(() => {
    balanceCount()
  }, [state])

  return (
    <>
      <section className={'Detail-container'}>
        <header className={'Detail-header'}><h2>Detail Year {year} </h2></header>
        <nav className='Detail-nav'>
          <div> <h3>Date</h3></div>
          <div> <h3>Description</h3></div>
          <div> <h3>Debit</h3> </div>
          <div> <h3>Credit</h3></div>
          <div> <h3>Saves</h3> </div>
          <div> <h3>Total</h3></div>
        </nav>

        <main className='Detail-table'>
          {
            (state) ?
              months.map(month =>
                <div key={month.id} className='Detail-table-container'>
                  <div className='Detail-table-title'>{month.name}</div>
                  {
                    state
                      .filter(element => {
                        const date = new Date(element.date.toDate());
                        return date.getFullYear() === year && date.getMonth() + 1 === month.id
                      })
                      .map(item =>
                          <div key={`${item.id}-datatable`} className='Detail-table-detail'>
                            <div>{`${item.date.toDate().getDate()}/${item.date.toDate().getMonth() + 1}/${item.date.toDate().getFullYear()}`}</div>
                            <div>{item.description}</div>
                            {
                              (item.type === "income")
                                ?
                                <div>{item.funds}</div>
                                : <div></div>
                            }
                            {
                              (item.type === "expense")
                                ?
                                <div>{item.funds}</div>
                                : <div></div>
                            }
                            {
                              (item.type === "save")
                                ?
                                <div>{item.funds}</div>
                                : <div></div>
                            }
                            <div></div >
                          </div>
                      )
                  }
                </div>
              )
              : <div>Loading</div>
          }
        </main>
      </section>


      <section className='Detail-total'>
        <div className='Detail-total-title'>
          <h3>Year total</h3>
        </div>
        {
          (total)
            ?
            <div className='Detail-total-table'>
              <div></div>
              <div></div>
              <div>{total.income}</div>
              <div>{total.expense}</div>
              <div>{total.save}</div>
              <div>{(total.income + total.save) - total.expense}</div>
            </div>
            :
            null
        }

      </section>
    </>
  )
}
