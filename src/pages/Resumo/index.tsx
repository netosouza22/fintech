import { GraficoVendas } from '../../components/GraficoVendas'
import { Loading } from '../../components/Loading'
import { Months } from '../../components/Months'
import { useData } from '../../contexts/DataContext'

export default function Resumo() {
  const { data, loading } = useData()

  if (data === null) {
    return null
  }
  return (
    <div className="container">
      <Months />
      {loading ? (
        <Loading />
      ) : (
        <section>
          <div className="resumo flex mb">
            <div className="box">
              <h2>Vendas</h2>
              <span>
                {data
                  .filter((item) => item.status !== 'falha')
                  .reduce((acc, item) => acc + item.preco, 0)
                  .toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
              </span>
            </div>
            <div className="box">
              <h2>Recebidos</h2>
              <span>
                {data
                  .filter((item) => item.status === 'pago')
                  .reduce((acc, item) => acc + item.preco, 0)
                  .toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
              </span>
            </div>
            <div className="box">
              <h2>Processando</h2>
              <span>
                {data
                  .filter((item) => item.status === 'processando')
                  .reduce((acc, item) => acc + item.preco, 0)
                  .toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
              </span>
            </div>
          </div>
          <section className="box mb">
            <GraficoVendas data={data} />
          </section>
        </section>
      )}
    </div>
  )
}
