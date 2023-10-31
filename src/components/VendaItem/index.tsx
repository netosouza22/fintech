import { NavLink } from 'react-router-dom'
import { IVenda } from '../../contexts/DataContext'

interface VendaItemProps {
    venda: IVenda
}

export function VendaItem({ venda }: VendaItemProps) {
    return (
        <div className="venda box">
            {' '}
            <NavLink
                to={`/venda/${venda.id}`}
                style={{ fontFamily: 'monospace' }}
            >
                {venda.id}
            </NavLink>
            <div>{venda.nome}</div>
            <div>
                {venda.preco.toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL',
                })}
            </div>
        </div>
    )
}
