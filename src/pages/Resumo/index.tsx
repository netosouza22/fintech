import { DateRange } from "../../components/DateRange";
import { Header } from "../../components/Header";
import { Sidenav } from "../../components/Sidenav";

export default function Resumo() {
  return(
    <div className="container">
      <Header />
      <Sidenav />
      <main>
        <DateRange />
      </main>
    </div>
  )
}