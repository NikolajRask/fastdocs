import { MoonIcon, SunIcon } from "lucide-react"
import { between, seconds } from "../utils"
import { SettingsProps } from "./settings.type"
import { useTheme } from "../use-theme"
import { GearIcon } from "@radix-ui/react-icons"

export const settings: SettingsProps = {
    color: "rgb(31, 102, 235)",
    productName: "Fastdocs",
    defaultPage: "Get Started",
    githubRepo: "https://github.com/NikolajRask/fastdocs",
    twitter: "https://x.com/nkjrask",
    defaultDocsTitle: "Docs",
    homePage: "/",
    loadingTime: 0,
    missingPage: "404.page",
    appendSearch: [
        {
            label: "Dark Mode",
            action: () => {
                useTheme("dark")
            },
            icon: <MoonIcon/>
        },
        {
            label: "Light Mode",
            action: () => {
                useTheme("light")
            },
            icon: <SunIcon/>
        },
        {
            label: "System Mode",
            action: () => {
                useTheme("system")
            },
            icon: <GearIcon/>
        }
    ]
}