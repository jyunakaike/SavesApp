import React, { useState, useEffect, useRef } from 'react';

import { MdKeyboardArrowDown } from 'react-icons/md'
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

  const handleSubmitIncome = () => {
    const incomeFormData = new FormData(incomeRef.current);
    // 
    const buyer = {
      'funds': incomeFormData.get('funds'),
      'description': incomeFormData.get('description'),
      // 'date': dateState,
      'type': 'incomes'
    };
    console.log('Incomes buyer',buyer)
    // try{
    //   const buyer = addDoc(collection(db, "detail"), {
    //     'funds': incomeFormData.get('funds'),
    //     'description': incomeFormData.get('description'),
    //     // 'date': dateState,
    //     'type':'expense'
    //   });
    //   console.log("Document written with Id", buyer)

    // }
    // catch(e){
    //   console.error("error adding document",e )
    // }
  }

  const handleSubmitSaves = () => {
    const saveFormData = new FormData(savesRef.current)
    const buyer = {
      'funds': saveFormData.get('funds'),
      'description': saveFormData.get('description'),
      // 'date': dateState,
      'type': 'saves'
    }
    console.log('saves', buyer)
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
                <div><input type="text" name='funds' /></div>
                <div><h3>Description</h3></div>
                <div><input type="text" name='description' /></div>
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
                <div><input type="number" name='funds' /></div>
                <div><h3>Description</h3></div>
                <div><input type="text" name='description' /></div>
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
