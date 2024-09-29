import { settings } from "./settings"
import { SettingsProps } from "./settings.type"

const useSettings = () => {
    return settings as SettingsProps
}

export default useSettings