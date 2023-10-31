import { useParams } from 'react-router-dom'
import { Loading } from '../../components/Loading'
import { IVenda } from '../../contexts/DataContext'
import useFetch from '../../hooks/useFetch'

export function Venda() {
    const { id } = useParams()

    const { data, loading } = useFetch<Omit<IVenda, 'data'>>(
        `https://data.origamid.dev/vendas/${id}`
    )

    if (data === null) {
        return <Loading />
    }

    return (
        <div>
            <div className="box mb">ID: {data.id}</div>
            <div className="box mb">Nome: {data.nome}</div>
            <div className="box mb">
                Preços:{' '}
                {data.preco.toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL',
                })}
            </div>
            <div className="box mb">Status: {data.status}</div>
            <div className="box mb">Parcelas: {data.parcelas}</div>
        </div>
    )
}
