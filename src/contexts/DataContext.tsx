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

    const dd = String(date.getDate()).padStart(2, '0')
    const mm = String(date.getDate() + 1).padStart(2, '0')
    const yyyy = date.getFullYear()

    return `${yyyy}-${mm}-${dd}`
}

export const DataContextProvider = ({ children }: PropsWithChildren) => {
    const [inicio, setInicio] = useState(getDate(30))
    const [final, setFinal] = useState(getDate(0))

    const { data, loading, error } = useFetch<IVenda[]>(
        'https://data.origamid.dev/vendas'
    )

    console.log(data)

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
