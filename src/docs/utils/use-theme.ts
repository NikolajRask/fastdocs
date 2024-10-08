"use client"

import { useEffect } from "react";

export function useTheme(theme?: "dark" | "light" | "system") {
    if (theme) {
        if (theme == "system") {
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                window.localStorage.setItem("theme", "dark")
                document.documentElement.setAttribute('data-theme', "dark");
                return "dark"
            } else {
                window.localStorage.setItem("theme", "light")
                document.documentElement.setAttribute('data-theme', "light");
                return "light"
            }
        } else {
            window.localStorage.setItem("theme", theme)
            document.documentElement.setAttribute('data-theme', theme);
        } 
    } else {

        useEffect(() => {
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme) {
              if (savedTheme == "dark" || savedTheme == "light" || savedTheme == "system") {
                useTheme(savedTheme)
              }
            }
          }, []);
        return window.localStorage.getItem("theme")
        
    }  
}