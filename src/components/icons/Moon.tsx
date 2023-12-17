import { LegacyRef, SVGProps } from 'react'

interface MoonIconProps extends Partial<SVGProps<SVGElement>> {
    w?: number
    h?: number
    ref?: LegacyRef<SVGSVGElement> | undefined
}

const MoonIcon = ({ w, h, ...props }: MoonIconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        fill="none"
        viewBox="0 0 24 24"
        {...props}
    >
        <path
            stroke="var(--color-5)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 6V3m5.5 9V7m-4-2.5h-3m9.5 5h-5m-.445 7.315a8.34 8.34 0 0 0 3.445-.74A8.37 8.37 0 1 1 7.925 5a8.37 8.37 0 0 0 7.63 11.815Z"
        />
    </svg>
)
export default MoonIcon
