import React, { useContext } from "react"
import ThemeContext from "../Context/ThemeContext"

const ThemeToggler = () => {
    const [themeMode, setThemeMode] = useContext(ThemeContext)

    return (
        <div>
            <span>{themeMode === "light" ? "Turn Off" : "Lights on"}</span>
        </div>
    )
}

export default ThemeToggler