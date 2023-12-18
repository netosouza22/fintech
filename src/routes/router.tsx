import { createBrowserRouter } from 'react-router-dom'
import LayoutMain from '../layouts/LayoutMain'
import ErrorPage from '../pages/ErrorPage'
import Resumo from '../pages/Resumo'
import { Venda } from '../pages/Venda'
import Vendas from '../pages/Vendas'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutMain />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Resumo />,
      },
      {
        path: 'vendas',
        element: <Vendas />,
      },
      {
        path: 'venda/:id',
        element: <Venda />,
      },
    ],
  },
])
