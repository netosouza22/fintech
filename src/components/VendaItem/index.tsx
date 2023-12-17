import { useNavigate } from 'react-router-dom'
import { IVenda } from '../../contexts/DataContext'

interface VendaItemProps {
  venda: IVenda
}

export function VendaItem({ venda }: VendaItemProps) {
  const navigate = useNavigate()
  const redirectOnClick = async () => {
    console.log('herer')
    return navigate(`/venda/${venda.id}`)
  }

  return (
    <div className="venda box filter" onClick={() => redirectOnClick()}>
      {' '}
      <span style={{ fontFamily: 'monospace' }}>{venda.id}</span>
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
