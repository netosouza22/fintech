import { Route, Routes } from 'react-router-dom'

import { Header } from '../components/Header'
import { Sidenav } from '../components/Sidenav'
import { useData } from '../contexts/DataContext'
import Resumo from '../pages/Resumo'
import { Venda } from '../pages/Venda'
import Vendas from '../pages/Vendas'

export default function Router() {
  console.log('entrou aqui')
  const { data, loading } = useData()

  if (data === null) {
    return null
  }
  return (
    <div className="container">
      <Sidenav />
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Resumo />}></Route>

          <Route path="/vendas" element={<Vendas />}></Route>

          <Route path="venda/:id" element={<Venda />}></Route>
        </Routes>
      </div>
    </div>
  )
}
