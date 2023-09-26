import { Header } from '../../components/Header'
import { Sidenav } from '../../components/Sidenav'
import { useData } from '../../contexts/DataContext'

export default function Resumo() {
    const { data } = useData()

    if (data === null) {
        return null
    }
    return (
        <div className="container">
            <Sidenav />
            <div>
                <Header />
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
                                    .filter(
                                        (item) => item.status === 'processando'
                                    )
                                    .reduce((acc, item) => acc + item.preco, 0)
                                    .toLocaleString('pt-br', {
                                        style: 'currency',
                                        currency: 'BRL',
                                    })}
                            </span>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
