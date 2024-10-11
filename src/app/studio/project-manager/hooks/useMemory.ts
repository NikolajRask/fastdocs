"use client"

export function useMemory<T>(item: string, value?: T) {
    try {
        if (value == undefined) {
            return JSON.parse(localStorage.getItem(item) ?? "null") ?? undefined
        } else {
            localStorage.setItem(item, JSON.stringify(value))
            return value;
        }     
    } catch (error) {
 
    }
}
