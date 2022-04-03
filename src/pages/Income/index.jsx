import React, { useState, useEffect } from 'react';

import { MdKeyboardArrowDown } from 'react-icons/md'
import './style.css'

export const Income = ({ setActive }) => {

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
      ? (setType(item),  setMenu(!menu))
      
      : setMenu(!menu)
  }

  return (
    <section className={'Income-container-section'}>
      <h2> Total Incomes (total funds)</h2>

      {
        (type === "income")
          ?
          <main>
            <header className={'Income-header'}>
              <h2>Add Incomes</h2> <MdKeyboardArrowDown onClick={changeMenu} className={'Income-header-icon'} />
            </header>
            <div className={'Income-container'}>
              <div className={'Income-container-detail'}>
                <div><h3>Funds (Income)</h3></div>
                <div><input type="text" /></div>
                <div><h3>Description</h3></div>
                <div><input type="text" /></div>
              </div>
              <div className={'Income-container-save'}>
                <button>Save</button>
              </div>
            </div>
          </main>
          :
          <main>
            <header className={'Income-header'}>
              <h2>Add Saves</h2> <MdKeyboardArrowDown onClick={changeType} className={'Income-header-icon'} />
            </header>
            <div className={'Income-container'}>
              <div className={'Income-container-detail'}>
                <div><h3>Funds (Saves)</h3></div>
                <div><input type="text" /></div>
                <div><h3>Description</h3></div>
                <div><input type="text" /></div>
              </div>
              <div className={'Income-container-save'}>
                <button>Save</button>
              </div>
            </div>
          </main>
      }
      {
        (menu)
          ?
          <div className={'Income-menu'}>
            <div onClick={ ()=>{changeType("income")}}><h3>Incomes</h3></div>
            <div onClick={ ()=>{changeType("save")}}><h3>Saves</h3></div>
          </div>
          : ""
      }

    </section>

  )
}
