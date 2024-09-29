import { useEffect } from "react"
import { useDocsContext } from "../context/context"
import useSettings from "./settings/use-settings"

export default function use404() {

    const { allTitles, page, setPage, isLoading } = useDocsContext()

    useEffect(() => {
      if (allTitles().length > 0) {
        if (!allTitles().includes(page)) {
          if (page?.trim() == "" || page?.trim() == null || page?.trim() == undefined || page == useSettings().defaultPage) {
            setPage(useSettings().defaultPage)
          } else {
            setPage(useSettings().missingPage)
          }
        }
      }
    }, [page, isLoading, allTitles()])
}