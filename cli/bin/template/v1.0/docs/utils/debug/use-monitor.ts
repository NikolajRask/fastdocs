import { useEffect } from "react"

export function useMonitor<T>(watch: T) {
    return useEffect(() => {
        console.log("Monitor: "+watch)
    }, [watch])
}