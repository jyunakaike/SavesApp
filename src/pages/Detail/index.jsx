import React, { useEffect } from 'react';


import './style.css';

export const Detail = ({ setActive }) => {
  useEffect(() => {
    setActive("")
  }, [])


  return (
    <section className={'Detail-container'}>
      <header className={'Detail-header'}><h2>Detail Year</h2></header>
      <nav className='Detail-nav'  >
        <div>Date</div>
        <div>Description</div>
        <div>Incomes</div>
        <div>Expenses</div>
        <div>Saves</div>
        <div>Balance</div>
      </nav>

      <main className='Detail-table'>
        {/* tabla1  */}
        <div className='Detail-table-container'>
          <div className='Detail-table-title'>
            <h3>Enero</h3>
          </div>

          <div className='Detail-table-detail'>
            <div>02/04/2022(fecha)</div>
            <div>Entrada por pago de salario(descripcion)</div>
            <div>1000 $ bs (Incomes)</div>
            <div></div>
            <div></div>
            <div></div>
          </div>

          <div className='Detail-table-detail' >
            <div>02/04/2022(fecha)</div>
            <div>pago servicios(descripcion)</div>
            <div></div>
            <div>200 $ bs (Expenses)</div>
            <div></div>
            <div></div>
          </div>

          <div className='Detail-table-detail'>
            <div>02/04/2022(fecha)</div>
            <div>Ahorro(descripcion)</div>
            <div></div>
            <div></div>
            <div>300 $ bs (Incomes)</div>
            <div></div>
          </div>

          <div className='Detail-table-detail'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div>Ahorros</div>
            <div>Balance diferencia (I - (Ex + Ahorro))</div>
          </div>
        </div>


        {/* tabla2  */}
        <div className='Detail-table-container'>
          <div className='Detail-table-title'>
            <h3>Febrero</h3>
          </div>

          <div className='Detail-table-detail'>
            <div>02/04/2022(fecha)</div>
            <div>Entrada por pago de salario(descripcion)</div>
            <div>1000 $ bs (Incomes)</div>
            <div></div>
            <div></div>
            <div></div>
          </div>

          <div className='Detail-table-detail' >
            <div>02/04/2022(fecha)</div>
            <div>pago servicios(descripcion)</div>
            <div></div>
            <div>200 $ bs (Expenses)</div>
            <div></div>
            <div></div>
          </div>

          <div className='Detail-table-detail'>
            <div>02/04/2022(fecha)</div>
            <div>Ahorro(descripcion)</div>
            <div></div>
            <div></div>
            <div>300 $ bs (Incomes)</div>
            <div></div>
          </div>

          <div className='Detail-table-detail'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div>Ahorros</div>
            <div>Balance diferencia (I - (Ex + Ahorro))</div>
          </div>
        </div>

        {/* Tabla3  */}

      </main>

      <div>
        <div>(date)</div>
        <div>(Description)</div>
        <div>Total Icomes</div>
        <div>Total Expenses</div>
        <div>Total Ahorros</div>
        <div>Total Balance</div>
      </div>

    </section>

  )
}
