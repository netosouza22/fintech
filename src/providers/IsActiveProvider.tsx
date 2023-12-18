import { PropsWithChildren, useState } from 'react'
import { BtnNumber, IsActiveContext } from '../contexts/IsActiveContext'

export default function IsActiveProvider({ children }: PropsWithChildren) {
  const [btnNumber, setBtnNumber] = useState<BtnNumber>(-3)

  const handleChangeSelected = (number: BtnNumber) => {
    setBtnNumber(number)
  }
  const value = {
    btnNumber,
    handleChangeSelected,
  }
  return (
    <IsActiveContext.Provider value={value}>
      {children}
    </IsActiveContext.Provider>
  )
}
