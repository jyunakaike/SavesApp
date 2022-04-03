import React, {useEffect} from 'react'

export const Income = ({setActive}) => {
  
  useEffect(() => {
    setActive("1")
  }, []);

  return (
    <div>Income</div>
  )
}
