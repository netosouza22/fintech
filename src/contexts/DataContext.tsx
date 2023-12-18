import { PropsWithChildren, createContext, useContext, useState } from 'react'
import useFetch from '../hooks/useFetch'

interface IDataContext {
    data: IVenda[] | null
    loading: boolean
    error: string | null
    inicio: string
    final: string
    setInicio: React.Dispatch<React.SetStateAction<string>>
    setFinal: React.Dispatch<React.SetStateAction<string>>
}

export interface IVenda {
    id: string
    nome: string
    preco: number
    status: 'pago' | 'processando' | 'falha'
    parcelas: number | null
    data: string
}

const DataContext = createContext<IDataContext | null>(null)

function getDate(n: number) {

    const date = new Date()
    date.setDate(date.getDate() - n)

    const dd = String(date.getDay() === 0 ? 1 : date.getDay()).padStart(2, '0')
    const mm = String(date.getMonth() + 1).padStart(2, '0')
    const yyyy = date.getFullYear()

    return `${yyyy}-${mm}-${dd}`
}

export const DataContextProvider = ({ children }: PropsWithChildren) => {
  const [inicio, setInicio] = useState(getDate(30))
  const [final, setFinal] = useState(getDate(0))

  const params = new URLSearchParams()
  params.append('inicio', inicio)
  params.append('final', final)

  const { data, loading, error } = useFetch<IVenda[]>(
    `https://data.origamid.dev/vendas?${params}`
  )

  return (
    <DataContext.Provider
      value={{ data, loading, error, inicio, final, setInicio, setFinal }}
    >
      {children}
    </DataContext.Provider>
  )
}

export const useData = () => {
    const context = useContext(DataContext)

    if (!context) {
        throw new Error(
            'useData só pode ser usado dentro de um DataContextProvider!'
        )
    }

    return context
}
