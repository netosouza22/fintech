import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { DateRange } from '../DateRange'
import { SwitchModeBtn } from '../base/SwitchModeBtn'

export function Header() {
    const location = useLocation()
    const [title, setTitle] = useState('Resumo')

    useEffect(() => {
        if (location.pathname === '/') {
            setTitle('Resumo')
            document.title = 'Fintech | Resumo'
        } else if (location.pathname === '/vendas') {
            setTitle('Vendas')
            document.title = 'Fintech | Vendas'
        } else {
            setTitle('Venda')
            document.title = 'Fintech | Venda'
        }
    }, [location])

    return (
      <header className="mb">
        <div className="daterange mb">
          <DateRange />
          <div className="box flex bg-3">
            <h1>{title}</h1>
            <SwitchModeBtn />
          </div>
        </div>
      </header>
    )
}
