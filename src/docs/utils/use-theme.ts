"use client"

export function useTheme(theme?: "dark" | "light" | "system") {
    if (theme) {
        window.localStorage.setItem("theme", theme)
        return theme
    } else {
        return window.localStorage.getItem("theme")
    }  
}