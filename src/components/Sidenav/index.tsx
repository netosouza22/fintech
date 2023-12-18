import { NavLink, useMatches } from 'react-router-dom'
import FintechSVG from '../../assets/FintechSVG'
import DashboardIcon from '../icons/Dashboard'

import SalesIcon from '../icons/Sales'
import SettingsIcon from '../icons/Settings'
import SignOutIcon from '../icons/SignOut'

export function Sidenav() {
  const matches = useMatches()

  const matcher = matches[1].pathname.split('/')[1]

  return (
    <nav className="sidenav box bg-3">
      <FintechSVG title="fintech logo" />
      <ul>
        <li className={`filter ${matcher === '' ? 'isActive' : ''}`}>
          <span>
            <DashboardIcon w={22} h={22} />
          </span>
          <NavLink to="/">Resumo</NavLink>
        </li>

        <li className={`filter ${matcher === 'vendas' ? 'isActive' : ''}`}>
          <span>
            <SalesIcon w={22} h={22} />
          </span>
          <NavLink to="/vendas">Vendas</NavLink>
        </li>

        <li className="filter">
          <span>
            <SettingsIcon w={22} h={22} />
          </span>
          <a href="">Configurações</a>
        </li>

        <li className="filter">
          <span>
            <SignOutIcon w={22} h={22} />
          </span>
          <a href="">Sair</a>
        </li>
      </ul>
    </nav>
  )
}
