import { ComponentProps } from "react"


type IDateInput = ComponentProps<'input'> & {
  label: string
}

const generalStyle: React.CSSProperties = {
  fontSize: '1rem',
  color: 'var(--color-2)',
  padding: "var(--gap-s) .75rem",
  backgroundColor: "var(--color-4)",
  borderRadius: "var(--gap)"
}

const labelStyle: React.CSSProperties = {
  display:'block',
  marginBottom: 'var(--gap-s)',
  fontWeight: "600",
  ...generalStyle
}

const inputStyle = {
  border: "none",
  fontFamily: "monospace",
  ...generalStyle
}

export const DateInput = ({label, ...props}: IDateInput) => {
  return(
    <div>
      <label style={labelStyle} htmlFor={label}>{label}</label>
      <input style={inputStyle} id={label} name={label} type="date" {...props} {...props}></input>
    </div>
  )
}