import { LegacyRef, SVGProps } from 'react'

interface DashboardIconProps extends Partial<SVGProps<SVGElement>> {
  w?: number
  h?: number
  ref?: LegacyRef<SVGSVGElement> | undefined
}

const DashboardIcon = ({ w, h, ...props }: DashboardIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={w}
    height={h}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path
      fill="var(--color-1)"
      d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm0 80q-33 0-56.5-23.5T160-200v-360q0-19 8.5-36t23.5-28l240-180q11-8 23-12t25-4q13 0 25 4t23 12l240 180q15 11 23.5 28t8.5 36v360q0 33-23.5 56.5T720-120H520v-240h-80v240H240Zm240-350Z"
    />
  </svg>
)
export default DashboardIcon
