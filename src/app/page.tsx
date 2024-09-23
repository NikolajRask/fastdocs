"use client"

import React, { useEffect } from 'react'
import styles from './styles.module.scss'
import classNames from '@/docs/utils/utils'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { useTheme } from '@/docs/utils/use-theme'
import { Facebook, Twitter, Instagram, Linkedin, Coffee, Github } from "lucide-react"

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
            </main>
            <Footer></Footer>
        </div>
    )
}

export default HomePage



function Footer() {
  return (
    <footer className="py-8" style={{marginTop: 300, backgroundColor: "var(--background-color)", borderTop: "1px solid var(--border-color)"}}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h1
                className={styles.smallLogo}
            >
                <a>F</a>astdocs
            </h1>
            <p style={{color: "var(--text-color)"}}>Build by Nikolaj Rask with ❤️</p>
          </div>
          <div className={styles.links}>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <Github size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <Coffee size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}