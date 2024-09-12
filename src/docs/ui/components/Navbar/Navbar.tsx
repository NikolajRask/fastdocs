"use client"

import { Input } from '@/components/ui/input'
import styles from './navbar.module.scss'
import useSettings from '@/docs/settings'
import { useState } from 'react'
import { Dialog, DialogClose, DialogContent, DialogTitle } from '@/components/ui/dialog'
import { DialogTrigger } from '@radix-ui/react-dialog'
import { useDocsContext } from '@/docs/context/context'
import { FileIcon, GitHubLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons'

export default function Navbar() {

    const [searchModelOpen, setSearchModalOpen] = useState(false)
    const [searchInput, setSearchInput] = useState("")

    const { search } = useDocsContext()

    return (
        <>
            <nav className={styles.navbar}>
                <h2
                    style={{
                        color: useSettings("color")
                    }}
                >
                    {useSettings("productName")}
                </h2>
                <div className={styles.flex}>
                    <Dialog>
                        <DialogTrigger>
                            <Input 
                                readOnly={true}
                                placeholder='Search'
                                className={styles.search}
                            />
                        </DialogTrigger>
                        <DialogContent className={styles.searchModal}>
                            <DialogTitle
                                style={{
                                    display: "none"
                                }}
                            />
                            <Input
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