import { createContext } from 'react'

export type BtnNumber = -3 | -2 | -1 | 0

interface IIsActiveContext {
  btnNumber: BtnNumber
  handleChangeSelected: (btnNumber: BtnNumber) => void
}

export const IsActiveContext = createContext<IIsActiveContext | null>(null)
