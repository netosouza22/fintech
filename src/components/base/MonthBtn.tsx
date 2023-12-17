import { useData } from '../../contexts/DataContext'

interface MonthProps {
    monthNumber: number
}

const btnStyle: React.CSSProperties = {
    padding: 'var(--gap) var(--gap-s)',
    backgroundColor: 'var(--color-3)',
    border: 'none',
    borderRadius: 'var(--gap)',
    color: 'var(--color-2)',
    fontWeight: '600',
    textTransform: 'capitalize',
}

function getMonthName(n: number) {
    const date = new Date()
    date.setMonth(date.getMonth() + n)
    return new Intl.DateTimeFormat('pt-BR', { month: 'long' }).format(date)
}

export function MonthBtn({ monthNumber }: MonthProps) {
    const { setInicio, setFinal } = useData()

    const setMonthInterval = (monthNumber: number) => {
        const date = new Date()
        date.setMonth(date.getMonth() + monthNumber)

        const firstDay = new Date(date.getFullYear(), date.getMonth(), 1)
            .toISOString()
            .substring(0, 10)

        const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0)
            .toISOString()
            .substring(0, 10)

        setInicio(firstDay)
        setFinal(lastDay)
    }

    return (
      <button
        style={btnStyle}
        className="filter"
        onClick={() => setMonthInterval(monthNumber)}
      >
        {getMonthName(monthNumber)}
      </button>
    )
}
