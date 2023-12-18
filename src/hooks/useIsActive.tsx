import { useContext } from 'react'
import { IsActiveContext } from '../contexts/IsActiveContext'

export default function useIsActive() {
  const context = useContext(IsActiveContext)

  if (!context) {
    throw new Error(
      'useIsActive só pode ser usado dentro deum IsActiveProvider'
    )
  }

  return context
}
