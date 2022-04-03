import React, {useEffect} from 'react'

export const Expense = ({ setActive }) => {
  
  useEffect(() => {
    setActive("3")
  }, []);


  return (
    <div>Expense</div>
  )
}
