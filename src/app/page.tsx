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
        <div className={styles.wrapper}>
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
                <section className={styles.fullWidth}>
                    <h3>Fastdocs makes it easy to</h3>
                    <p>+ Build a great UI and UX for documentation</p>
                    <p>+ Write documentation that is to understand</p>
                    <p>+ Customize your documentation to your liking</p>
                    <p>+ Implement features such as themes, search and <br/>navigation into your documentation</p>
                    <p>+ Write documentation that is 100% owned by you</p>
                </section>
                <section>
                    <img
                        className={styles.docsImage}
                        src={'./docs.png'}
                    />
                </section>
            </main>
        </div>
    )
}

export default HomePage