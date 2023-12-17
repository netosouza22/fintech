import { LegacyRef, SVGProps } from 'react'

interface SalesIconProps extends Partial<SVGProps<SVGElement>> {
  w?: number
  h?: number
  ref?: LegacyRef<SVGSVGElement> | undefined
}

const SalesIcon = ({ w, h, ...props }: SalesIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path
      fill="var(--color-1)"
      d="M200-720q-17 0-28.5-11.5T160-760q0-17 11.5-28.5T200-800h560q17 0 28.5 11.5T800-760q0 17-11.5 28.5T760-720H200Zm0 560q-17 0-28.5-11.5T160-200v-200h-7q-19 0-31-14.5t-8-33.5l40-200q3-14 14-23t25-9h574q14 0 25 9t14 23l40 200q4 19-8 33.5T807-400h-7v200q0 17-11.5 28.5T760-160q-17 0-28.5-11.5T720-200v-200H560v200q0 17-11.5 28.5T520-160H200Zm40-80h240v-160H240v160Zm-38-240h556-556Zm0 0h556l-24-120H226l-24 120Z"
    />
  </svg>
)
export default SalesIcon
