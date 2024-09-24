import { between, seconds } from "../utils"
import { SettingsProps } from "./settings.type"

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
    appendSearch: ["Light Mode", "Dark Mode", "System"]
}