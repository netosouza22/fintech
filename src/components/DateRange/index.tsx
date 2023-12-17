import { useData } from '../../contexts/DataContext'
import { DateInput } from '../base/DateInput'

export const DateRange = () => {
    const { inicio, setInicio, final, setFinal } = useData()

    return (
      <form className="flex box" onSubmit={(e) => e.preventDefault()}>
        <DateInput
          label="Inicio"
          value={inicio}
          onChange={(e) => setInicio(e.target.value)}
        />

        <DateInput
          label="final"
          value={final}
          onChange={(e) => setFinal(e.target.value)}
        />
      </form>
    )
}
