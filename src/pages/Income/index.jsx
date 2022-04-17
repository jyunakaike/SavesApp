import React, { useState, useEffect, useRef } from 'react';

import { MdKeyboardArrowDown } from 'react-icons/md'

import { addData } from '../../services/service';

import './style.css'

export const Income = ({ setActive }) => {
  const incomeRef = useRef(null);
  const savesRef = useRef(null);


  const [type, setType] = useState("income");
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    setActive("1")
  }, []);

  const changeMenu = () => {
    setMenu(!menu)
  }

  const changeType = (item) => {
    (type !== item)
      ? (setType(item), setMenu(!menu))

      : setMenu(!menu)
  }

  const handleSubmitIncome = (event) => {
    event.preventDefault()
    const incomeformData = new FormData(incomeRef.current);

    const funds = Number(parseFloat(incomeformData.get('funds')).toFixed(2))
    const description = incomeformData.get('description')
    const type = 'income'

    try {
      addData(funds, description ,type)
    }
    catch (e) {
      console.error('error adding document', e)
    }
    incomeRef.current.reset();
  }

  const handleSubmitSaves = (event) => {
    event.preventDefault()
    const saveformData = new FormData(savesRef.current);

    const funds = Number(parseFloat(saveformData.get('funds')).toFixed(2))
    const description = saveformData.get('description')
    const type = 'save'

    try {
      addData(funds, description ,type)
    }
    catch (e) {
      console.error('error adding document', e)
    }
    savesRef.current.reset();
  }

  return (
    <section className={'Income-container-section'}>
      <h2> Total Incomes (total funds)</h2>
      {
        (type === "income")
          ?
          // Incomes
          <main>
            <header className={'Income-header'}>
              <h2>Add Incomes</h2> <MdKeyboardArrowDown onClick={changeMenu} className={'Income-header-icon'} />
            </header>
            <div className={'Income-container'}>
              <form className={'Income-container-detail'} ref={incomeRef}>
                <div><h3>Funds (Income)</h3></div>
                <div><input type="text" name='funds' autoComplete="off" /></div>
                <div><h3>Description</h3></div>
                <div><input type="text" name='description' autoComplete="off" /></div>
              </form>
              <div className={'Income-container-save'}>
                <button type='button' onClick={handleSubmitIncome}  >Save</button>
              </div>
            </div>
          </main>
          :
          // Saves
          <main>
            <header className={'Income-header'}>
              <h2>Add Saves</h2> <MdKeyboardArrowDown onClick={changeType} className={'Income-header-icon'} />
            </header>
            <div className={'Income-container'}>
              <form className={'Income-container-detail'} ref={savesRef}>
                <div><h3>Funds (Saves)</h3></div>
                <div><input type="number" name='funds' autoComplete="off" /></div>
                <div><h3>Description</h3></div>
                <div><input type="text" name='description' autoComplete="off" /></div>
              </form>
              <div className={'Income-container-save'}>
                <button type='button' onClick={handleSubmitSaves} >Save</button>
              </div>
            </div>
          </main>
      }
      {
        (menu)
          ?
          <div className={'Income-menu'}>
            <div onClick={() => { changeType("income") }}><h3>Incomes</h3></div>
            <div onClick={() => { changeType("save") }}><h3>Saves</h3></div>
          </div>
          : ""
      }

    </section>

  )
}
