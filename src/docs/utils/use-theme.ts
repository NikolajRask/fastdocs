"use client"

export function useTheme(theme?: "dark" | "light" | "system") {
    if (theme) {
        if (theme == "system") {
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                window.localStorage.setItem("theme", "dark")
                document.documentElement.setAttribute('data-theme', "dark");
            } else {
                window.localStorage.setItem("theme", "light")
                document.documentElement.setAttribute('data-theme', "light");
            }
        } else {
            window.localStorage.setItem("theme", theme)
            document.documentElement.setAttribute('data-theme', theme);
        } 
    } else {
        return window.localStorage.getItem("theme")
    }  
}