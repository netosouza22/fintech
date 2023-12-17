import {
    CartesianGrid,
    Legend,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts'
import { IVenda } from '../../contexts/DataContext'

interface GraficoVendasProps {
    data: IVenda[]
}

interface VendaDiaria {
    data: string
    pago: number
    processando: number
    falha: number
}

function transformData(data: IVenda[]): VendaDiaria[] {
    const dias = data.reduce((acc: { [key: string]: VendaDiaria }, item) => {
        const dia = item.data.split(' ')[0]

        if (!acc[dia]) {
            acc[dia] = {
                data: dia,
                pago: 0,
                falha: 0,
                processando: 0,
            }
        }

        acc[dia][item.status] += item.preco

        return acc
    }, {})

    return Object.values(dias)
}

export function GraficoVendas({ data }: GraficoVendasProps) {
    const dataTransformada = transformData(data)

    return (
        <div className="teste">
            <ResponsiveContainer height={450}>
                <LineChart data={dataTransformada}>
                    <XAxis dataKey="data" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <CartesianGrid stroke="#f5f5f5" />
                    <Line
                        type="monotone"
                        dataKey="pago"
                        stroke="#A36af9"
                        strokeWidth={3}
                    ></Line>
                    <Line
                        type="monotone"
                        dataKey="processando"
                        stroke="#fbcb21"
                        strokeWidth={3}
                    ></Line>
                    <Line
                        type="monotone"
                        dataKey="falha"
                        stroke="#000"
                        strokeWidth={3}
                    ></Line>
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
