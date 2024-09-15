const settings: any = {
    color: "red",
    productName: "fastdocs",
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
        }
    ]
}



const useSettings = (setting?: string) => {

    if (setting == undefined) {
        return settings
    } else {
        return settings[setting]
    }
}

export default useSettings