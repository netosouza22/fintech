import { useEffect, useState } from 'react'
import MoonIcon from '../icons/Moon'
import SunIcon from '../icons/Sun'

export function SwitchModeBtn() {
    const [isDark, setIsDark] = useState(false)

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark-mode')
        } else {
            document.documentElement.classList.remove('dark-mode')
        }
    }, [isDark])

    return (
        <div className="switch-container">
            <input
                id="switch-mode"
                type="checkbox"
                checked={isDark}
                onChange={(e) => setIsDark(e.target.checked)}
            ></input>
            <label htmlFor="switch-mode">
                <SunIcon w={20} h={20} />
                <MoonIcon w={20} h={20} />

                <span className="ball"></span>
            </label>
        </div>
    )
}
