"use client"

import styles from '../components.module.scss'
import React, { useState } from 'react'
import { DialogTrigger } from '@radix-ui/react-dialog'
import { useDocsContext } from '@/docs/context/context'
import { FileIcon, GitHubLogoIcon, MagnifyingGlassIcon, SunIcon, TwitterLogoIcon } from '@radix-ui/react-icons'
import { useTheme } from '@/docs/utils/use-theme'
import useSettings from '@/docs/utils/settings/use-settings'
import Link from 'next/link'
import { PlayIcon } from 'lucide-react'
import Modal from '../custom/Modal/Modal'

export default function Navbar() {

    const [searchModelOpen, setSearchModalOpen] = useState(false)
    const [searchInput, setSearchInput] = useState("")

    const { search } = useDocsContext()

    return (
        <>
            <Modal
                isOpen={searchModelOpen}
                onClose={() => {
                    setSearchModalOpen(false)
                }}
                style={{
                    background: "var(--background-color)",
                    width: 500,
                    height: 300,
                    borderRadius: 20,
                    border: "1px solid var(--border-color)",
                }}
            >
                <input
                    placeholder="Search"
                    value={searchInput}
                    className={styles.searchBar}
                    onChange={(e) => {
                        setSearchInput(e.target.value)
                    }}
                />
                {
                    search(searchInput).length + (useSettings().appendSearch.filter((item) => item.label.includes(searchInput)) ?? 0).length > 0 ? (
                        <>
                            <div className={styles.searchResults}>
                                {
                                    search(searchInput).map((result, index) => {
                                        return (
                                            <div key={index}>
                                                <SearchItem 
                                                    title={result}
                                                    onClick={() => {
                                                        setSearchModalOpen(false)
                                                    }}
                                                />
                                            </div>
                                        )
                                    })
                                }
                                {
                                search(searchInput).length > 0 && (useSettings().appendSearch.filter((item) => item.label.includes(searchInput)) ?? 0).length > 0 && (
                                        <div
                                            style={{
                                                width: '100%',
                                                height: "1px",
                                                background: "var(--border-color-subdued)"
                                            }}
                                        />
                                ) 
                                }
                                {
                                    useSettings().appendSearch.map((item, index) => {
                                        if (item.label.includes(searchInput)) {
                                            return (
                                                <div key={index}>
                                                    <AppendSearchItem 
                                                        icon={item.icon}
                                                        title={item.label}
                                                        onClick={() => {
                                                            setSearchModalOpen(false)
                                                            item.action()
                                                        }}
                                                    />
                                                </div>
                                            )
                                        }
                                    })
                                }  
                            </div>
                        </>
                    ) : (
                        <div>
                            <p className={styles.noResult}>No results found</p>
                        </div>
                    )
                }
            </Modal>
            <nav className={styles.navbar}>
                <div className={styles.flexStart}>
                    <h2
                        style={{
                            color: useSettings().color,
                        }}
                        className={styles.logo}
                        onClick={() => {
                            window.location.href = useSettings().homePage
                        }}
                    >
                        {useSettings().productName}
                    </h2>
                    <div className={styles.navLinks}>
                        {/* Add links here in the navbar */}
                        <Link href={"/"}><p className={styles.navLink}>Home</p></Link>
                        <Link href={"/docs"}><p className={styles.navLink}>Docs</p></Link>
                        <Link href={"https://buymeacoffee.com/nikorask"}><p className={styles.navLink}>Support</p></Link>
                    </div>
                </div>
                <div className={styles.flex}>
                    <input
                        readOnly={true}
                        placeholder='Search'
                        className={styles.search}
                        onClick={() => {
                            setSearchModalOpen(true)
                        }}
                    />
                    <MagnifyingGlassIcon
                        className={styles.searchIcon}
                    />
                    <GitHubLogoIcon 
                        onClick={() => {
                            window.open(useSettings().githubRepo)
                        }}
                        className={styles.logo}
                    />
                    <TwitterLogoIcon
                        onClick={() => {
                            window.open(useSettings().twitter)
                        }}
                        className={styles.logo}
                    />  
                    {/* <DropdownMenu>
                        <DropdownMenuTrigger
                            className={styles.dropdown}
                        >
                            <SunIcon
                                className={styles.logo}
                            />   
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                            className={styles.dropdownContent}
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
                    </DropdownMenu>               */}
                </div>
            </nav>
        </>
    )
}

interface SearchItemProps{
    title: string,
    onClick: () => void
}

function SearchItem({
    title,
    onClick
}: SearchItemProps) {

    const { setPage } = useDocsContext()

    return (
        <div 
            className={styles.searchItem}
            onClick={() => {
                setPage(title)
                onClick()
            }}
        >
            <FileIcon/>
            <p>{title}</p>
        </div>
    )
}

interface AppendSearchItemProps{
    title: string,
    onClick: () => void,
    icon?: React.ReactNode
}


function AppendSearchItem({
    title,
    onClick,
    icon
}: AppendSearchItemProps) {

    return (
        <div 
            className={styles.searchItem}
            onClick={() => {
                onClick()
            }}
        >
            {
                icon == undefined ? (
                    <PlayIcon/>
                ) : (
                    <>
                        {icon}
                    </>
                )
            }
            <p>{title}</p>
        </div>
    )
}