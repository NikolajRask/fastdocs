import { useEffect } from "react"
import { useDocsContext } from "../context/context"
import useSettings from "./settings/use-settings"

export default function use404() {

    const { allTitles, page, setPage } = useDocsContext()

    useEffect(() => {

        if (!allTitles().includes(page)) {
            console.log(page)
            console.log(useSettings().defaultPage)
            if (page?.trim() == "" || page?.trim() == null || page?.trim() == undefined || page == useSettings().defaultPage) {
              setPage(useSettings().defaultPage)
            } else {
              setPage(useSettings().missingPage)
            }
        }
    }, [page])
}