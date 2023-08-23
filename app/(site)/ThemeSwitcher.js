"use client"
import {useState, useEffect} from 'react'
import {useTheme} from 'next-themes'
import { DarkModeToggle } from '@anatoliygatt/dark-mode-toggle';

const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false);
    const {theme, setTheme} = useTheme();
    const [mode, setMode] = useState('dark');

    useEffect(() => {
        setMounted(true);
    },[]);

    if (!mounted){
        return null;
    }

    return(
        <div className="mt-2">
            <button
                onClick={() => theme == "dark"? setTheme('light'): setTheme("dark")}
                >
                <DarkModeToggle
                    mode={mode}
                    size="sm"
                    inactiveTrackColor="#e2e8f0"
                    inactiveTrackColorOnHover="#f8fafc"
                    inactiveTrackColorOnActive="#cbd5e1"
                    activeTrackColor="#334155"
                    activeTrackColorOnHover="#1e293b"
                    activeTrackColorOnActive="#0f172a"
                    inactiveThumbColor="#1e293b"
                    activeThumbColor="#e2e8f0"
                    onChange={(mode) => {
                        setMode(mode);
                    }}
                />
            </button>
        </div>
    )
}

export default ThemeSwitcher;