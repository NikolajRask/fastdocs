"use client"

import { Input } from '@/components/ui/input'
import styles from './navbar.module.scss'
import useSettings from '@/docs/settings'
import { useState } from 'react'
import { Dialog, DialogClose, DialogContent, DialogTitle } from '@/components/ui/dialog'
import { DialogTrigger } from '@radix-ui/react-dialog'
import { useDocsContext } from '@/docs/context/context'
import { FileIcon, GitHubLogoIcon, MagnifyingGlassIcon, SunIcon, TwitterLogoIcon } from '@radix-ui/react-icons'
import ActionIcon from '../core/ActionIcon/ActionIcon'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { useTheme } from '@/docs/utils/use-theme'

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
                            color: useSettings("color"),
                            fontWeight: 700,
                        }}
                        onClick={() => {
                            window.location.href = useSettings("homePage")
                        }}
                    >
                        {useSettings("productName")}
                    </h2>
                    <div className={styles.navLinks}>
                        {/* Add links here in the navbar */}
                        <p className={styles.navLink}>Home</p>
                        <p className={styles.navLink}>Docs</p>
                        <p className={styles.navLink}>Support</p>
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
                                style={{
                                    display: "none"
                                }}
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
                                search(searchInput).length > 0 ? (
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
                                    </div>
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
                            window.open(useSettings("githubRepo"))
                        }}
                        className={styles.logo}
                    />
                    <TwitterLogoIcon
                        onClick={() => {
                            window.open(useSettings("twitter"))
                        }}
                        className={styles.logo}
                    />  
                    <DropdownMenu>
                        <DropdownMenuTrigger
                            style={{
                                border: "none",
                                outline: "none"
                            }}
                        >
                            <SunIcon
                                className={styles.logo}
                            />   
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
                                    console.log(useTheme("system"))
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