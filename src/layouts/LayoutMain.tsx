import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'
import { Sidenav } from '../components/Sidenav'

export default function LayoutMain() {
  return (
    <>
      <div className="container">
        <Sidenav />
        <div>
          <Header />
          <Outlet />
        </div>
      </div>
    </>
  )
}
