const settings: any = {
    color: "red",
    productName: "fastdocs",
    defaultPage: "Get Started"
}



const useSettings = (setting?: string) => {

    if (setting == undefined) {
        return settings
    } else {
        return settings[setting]
    }
}

export default useSettings