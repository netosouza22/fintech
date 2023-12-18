import { MonthBtn } from '../base/MonthBtn'

export function Months() {
  return (
    <div className="flex">
      <MonthBtn monthNumber={-3} />
      <MonthBtn monthNumber={-2} />
      <MonthBtn monthNumber={-1} />
      <MonthBtn monthNumber={0} />
    </div>
  )
}
