"use client"



import { Input } from '@/components/ui/input'
import styles from './navbar.module.scss'
import useSettings from '@/docs/settings'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
        <h2
            style={{
                color: useSettings("color")
            }}
        >
            {useSettings("productName")}
        </h2>
        <Input 
            placeholder='Search'
            className={styles.search}
        />
    </nav>
  )
}