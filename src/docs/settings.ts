const settings: any = {
    color: "rgb(31, 102, 235)",
    productName: "Fastdocs",
    defaultPage: "Get Started",
    githubRepo: "https://github.com/NikolajRask/fastdocs",
    twitter: "https://x.com/nkjrask",
    defaultDocsTitle: "Docs",
    appendSearch: [
        {
            label: "Light Mode",
            action: () => {
                console.log("Light Mode")
            }
        },
        {
            label: "Dark Mode",
            action: () => {
                console.log("Dark Mode")
            }
        },
    ],
    homePage: "/"
}



const useSettings = (setting?: string) => {

    if (setting == undefined) {
        return settings
    } else {
        return settings[setting]
    }
}

export default useSettings