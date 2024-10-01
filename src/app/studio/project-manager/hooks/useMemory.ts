"use client"

import { useEffect, useState } from "react";

export function useMemory<T>(item: string, value?: T) {
    if (value == undefined) {
        return JSON.parse(localStorage.getItem(item) ?? "null") ?? undefined
    } else {
        localStorage.setItem(item, JSON.stringify(value))
        return value;
    }
}
