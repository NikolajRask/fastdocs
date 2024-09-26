"use client"

import { Input } from '@/components/ui/input'
import styles from '../components.module.scss'
import React, { useState } from 'react'
import { Dialog, DialogClose, DialogContent, DialogTitle } from '@/components/ui/dialog'
import { DialogTrigger } from '@radix-ui/react-dialog'
import { useDocsContext } from '@/docs/context/context'
import { FileIcon, GitHubLogoIcon, MagnifyingGlassIcon, SunIcon, TwitterLogoIcon } from '@radix-ui/react-icons'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { useTheme } from '@/docs/utils/use-theme'
import useSettings from '@/docs/utils/settings/use-settings'
import Link from 'next/link'
import { PlayIcon } from 'lucide-react'

export default function Navbar() {

    const [searchModelOpen, setSearchModalOpen] = useState(false)
    const [searchInput, setSearchInput] = useState("")

    const { search } = useDocsContext()

    return (
        <>
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
                    <Dialog>
                        <DialogTrigger>
                            <Input 
                                readOnly={true}
                                placeholder='Search'
                                className={styles.search}
                            />
                            <MagnifyingGlassIcon
                                className={styles.searchIcon}
                            />
                        </DialogTrigger>
                        <DialogContent className={styles.searchModal}>
                            <DialogTitle
                                className={styles.dialogTitle}
                            />
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
                                                            <DialogClose style={{width: '100%'}}>
                                                                <SearchItem title={result}/>
                                                            </DialogClose>
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
                                                                <DialogClose style={{width: '100%'}}>
                                                                    <AppendSearchItem 
                                                                        icon={item.icon}
                                                                        title={item.label}
                                                                        onClick={() => {
                                                                            item.action()
                                                                        }}
                                                                    />
                                                                </DialogClose>
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
                        </DialogContent>
                    </Dialog>
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
                    <DropdownMenu>
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
                    </DropdownMenu>              
                </div>
            </nav>
        </>
    )
}

interface SearchItemProps{
    title: string
}

function SearchItem({
    title
}: SearchItemProps) {

    const { setPage } = useDocsContext()

    return (
        <div 
            className={styles.searchItem}
            onClick={() => {
                setPage(title)
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