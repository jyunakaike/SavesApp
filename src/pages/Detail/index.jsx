import React, { useEffect, useContext } from 'react';
import AppContext from '../../context/AppContext';


import './style.css';

export const Detail = ({ setActive }) => {
  const { state, getList } = useContext(AppContext);
  
  
  useEffect(() => {
    setActive("")
    getList()
    // console.log(state)
  }, [])

  if(state != undefined){
    console.log('state',state)

  }

  

  return (
    <section className={'Detail-container'}>
      <header className={'Detail-header'}><h2>Detail Year </h2></header>
      
      <nav className='Detail-nav'>
        <div> <h3>Date</h3></div>
        <div> <h3>Description</h3></div>
        <div> <h3>Debit</h3> </div>
        <div> <h3>Credit</h3></div>
        <div> <h3>Saves</h3> </div>
        <div> <h3>Total</h3></div>
      </nav>

      <main className='Detail-table'>
        {/* tabla1  */}
        <div className='Detail-table-container'>
          <div className='Detail-table-title'>
            <h3>Enero</h3>
          </div>
          <div className='Detail-table-detail'>
            <div>02/04/2022 {/*fecha*/}</div>
            <div>Entrada por pago de salario{/* decripcion  */}</div>

            <div>1000 $ {/* Incomes */}</div>
            <div></div>
            <div></div>
            <div></div>
          </div>

          <div className='Detail-table-detail' >
            <div>02/04/2022{/* fecha */}</div>
            <div>pago servicios{/* decripcion  */}</div>
            <div></div>
            <div>200 $  {/* Expenses */}</div>
            <div></div>
            <div></div>
          </div>

          <div className='Detail-table-detail'>
            <div>02/04/2022{/* fecha */}</div>
            <div>Ahorro{/* descripcion  */}</div>
            <div></div>
            <div></div>
            <div>300 $  {/* saves  */}</div>
            <div></div>
          </div>

          <div className='Detail-table-total'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div>Ahorros</div>
            <div>Total{/*  Balance diferencia (I - (Ex + Ahorro))*/}</div>
          </div>
        </div>


        {/* tabla2  */}
        <div className='Detail-table-container'>
          <div className='Detail-table-title'>
            <h3>Febrero</h3>
          </div>

          <div className='Detail-table-detail'>
            <div>02/04/2022</div>
            <div>Entrada por pago de salario</div>
            <div>1000 $ </div>
            <div></div>
            <div></div>
            <div></div>
          </div>

          <div className='Detail-table-detail' >
            <div>02/04/2022</div>
            <div>pago servicios</div>
            <div></div>
            <div>200 $</div>
            <div></div>
            <div></div>
          </div>

          <div className='Detail-table-detail'>
            <div>02/04/2022</div>
            <div>Ahorro</div>
            <div></div>
            <div></div>
            <div>300 $ </div>
            <div></div>
          </div>

          <div className='Detail-table-total'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div>Ahorros</div>
            <div>Total</div>
          </div>
        </div>

        {/* tabla3  */}
        <div className='Detail-table-container'>
          <div className='Detail-table-title'>
            <h3>Marzo</h3>
          </div>

          <div className='Detail-table-detail'>
            <div>02/04/2022</div>
            <div>Entrada por pago de salario</div>
            <div>1000 $ </div>
            <div></div>
            <div></div>
            <div></div>
          </div>

          <div className='Detail-table-detail' >
            <div>02/04/2022</div>
            <div>pago servicios</div>
            <div></div>
            <div>200 $</div>
            <div></div>
            <div></div>
          </div>

          <div className='Detail-table-detail'>
            <div>02/04/2022</div>
            <div>Ahorro</div>
            <div></div>
            <div></div>
            <div>300 $ </div>
            <div></div>
          </div>

          <div className='Detail-table-total'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div>Ahorros</div>
            <div>Total</div>
          </div>
        </div>

        {/* tabla4  */}
        <div className='Detail-table-container'>
          <div className='Detail-table-title'>
            <h3>Abril</h3>
          </div>

          <div className='Detail-table-detail'>
            <div>02/04/2022</div>
            <div>Entrada por pago de salario</div>
            <div>1000 $ </div>
            <div></div>
            <div></div>
            <div></div>
          </div>

          <div className='Detail-table-detail' >
            <div>02/04/2022</div>
            <div>pago servicios</div>
            <div></div>
            <div>200 $</div>
            <div></div>
            <div></div>
          </div>

          <div className='Detail-table-detail'>
            <div>02/04/2022</div>
            <div>Ahorro</div>
            <div></div>
            <div></div>
            <div>300 $ </div>
            <div></div>
          </div>

          <div className='Detail-table-total'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div>Ahorros</div>
            <div>Total</div>
          </div>
        </div>

        {/* tabla5  */}
        <div className='Detail-table-container'>
          <div className='Detail-table-title'>
            <h3>Mayo</h3>
          </div>

          <div className='Detail-table-detail'>
            <div>02/04/2022</div>
            <div>Entrada por pago de salario</div>
            <div>1000 $ </div>
            <div></div>
            <div></div>
            <div></div>
          </div>

          <div className='Detail-table-detail' >
            <div>02/04/2022</div>
            <div>pago servicios</div>
            <div></div>
            <div>200 $</div>
            <div></div>
            <div></div>
          </div>

          <div className='Detail-table-detail'>
            <div>02/04/2022</div>
            <div>Ahorro</div>
            <div></div>
            <div></div>
            <div>300 $ </div>
            <div></div>
          </div>

          <div className='Detail-table-total'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div>Ahorros</div>
            <div>Total</div>
          </div>
        </div>

        {/* tabla6  */}
        <div className='Detail-table-container'>
          <div className='Detail-table-title'>
            <h3>Junio</h3>
          </div>

          <div className='Detail-table-detail'>
            <div>02/04/2022</div>
            <div>Entrada por pago de salario</div>
            <div>1000 $ </div>
            <div></div>
            <div></div>
            <div></div>
          </div>

          <div className='Detail-table-detail' >
            <div>02/04/2022</div>
            <div>pago servicios</div>
            <div></div>
            <div>200 $</div>
            <div></div>
            <div></div>
          </div>

          <div className='Detail-table-detail'>
            <div>02/04/2022</div>
            <div>Ahorro</div>
            <div></div>
            <div></div>
            <div>300 $ </div>
            <div></div>
          </div>

          <div className='Detail-table-total'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div>Ahorros</div>
            <div>Total</div>
          </div>
        </div>

        {/* tabla7  */}
        <div className='Detail-table-container'>
          <div className='Detail-table-title'>
            <h3>Julio</h3>
          </div>

          <div className='Detail-table-detail'>
            <div>02/04/2022</div>
            <div>Entrada por pago de salario</div>
            <div>1000 $ </div>
            <div></div>
            <div></div>
            <div></div>
          </div>

          <div className='Detail-table-detail' >
            <div>02/04/2022</div>
            <div>pago servicios</div>
            <div></div>
            <div>200 $</div>
            <div></div>
            <div></div>
          </div>

          <div className='Detail-table-detail'>
            <div>02/04/2022</div>
            <div>Ahorro</div>
            <div></div>
            <div></div>
            <div>300 $ </div>
            <div></div>
          </div>

          <div className='Detail-table-total'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div>Ahorros</div>
            <div>Total</div>
          </div>
        </div>
      </main>



      <div className='Detail-total-title'>
        <h3>Year total</h3>
      </div>
      <div className='Detail-total'>
        <div></div>
        <div></div>
        <div>Total Icomes</div>
        <div>Total Expenses</div>
        <div>Total Ahorros</div>
        <div>Total Balance</div>
      </div>

    </section>

  )
}
