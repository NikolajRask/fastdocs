"use client"

import React, { useEffect } from 'react'
import styles from './styles.module.scss'
import classNames from '@/docs/utils/utils'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { useTheme } from '@/docs/utils/use-theme'

const HomePage = () => {

    useTheme()


    return (
        <main className={styles.main}>
            <nav className={styles.navbar}>
                <h1
                    className={styles.logo}
                >
                    <a>F</a>astdocs
                </h1>
                <DropdownMenu>
                    <DropdownMenuTrigger
                        style={{
                            border: "none",
                            outline: "none"
                        }}
                    >
                        {
                            useTheme() == "dark" ? (
                                <SunIcon
                                    className={styles.themeLogo}
                                /> 
                            ) : (
                                <MoonIcon
                                    className={styles.themeLogo}
                                /> 
                            )
                        }  
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        style={{
                            backgroundColor: "var(--background-color)",
                            color: "var(--text-color)",
                            border: "1px solid var(--border-color)"
                        }}
                    >
                        <DropdownMenuItem
                            onClick={() => {
                                useTheme("light")
                            }}
                        >
                            Light
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            onClick={() => {
                                useTheme("dark")
                            }}
                        >
                            Dark
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            onClick={() => {
                                useTheme("system")
                            }}
                        >
                            System
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>   
            </nav>
            <section>
                <h2 className={styles.header}>
                    Write docs in <a>hours</a> not <a className={styles.strike}>days</a>
                </h2>
                <p className={styles.description}>The best way to build documentation in NextJS that are easy to understand, looks beautifull & that you own.</p>
                <div className={styles.btns}>
                    <button 
                        className={classNames(styles.btn, styles.getStartedBtn)}
                        onClick={() => {
                            window.location.href = "/docs?page=Get%20Started"
                        }}
                    >
                        Get Started
                    </button>
                    <button 
                        className={classNames(styles.btn, styles.docsBtn)}
                        onClick={() => {
                            window.location.href = "/docs"
                        }}
                    >
                         Read Docs
                    </button>
                </div>
            </section>
        </main>
    )
}

export default HomePage