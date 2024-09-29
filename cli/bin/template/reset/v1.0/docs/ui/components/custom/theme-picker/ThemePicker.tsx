import React, { useEffect, useRef, useState } from 'react'
import styles from '../../components.module.scss'
import { useTheme } from '@/docs/utils/use-theme'
import { ActionIcon } from '../../core'
import { MoonIcon, SunIcon } from 'lucide-react'
import classNames from '@/docs/utils/utils'

const ThemePicker = () => {

    const [isOpen, setIsOpen] = useState(false)

    const theme = useTheme()

    const dropdownRef = useRef<HTMLDivElement | null>(null); 

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
          if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsOpen(false);
          }
        };
    
        // Add event listener for clicks outside of the dropdown
        document.addEventListener('mousedown', handleClickOutside);
    
        // Cleanup the event listener on component unmount
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRef]);
    

    return (
        <>
            <div ref={dropdownRef}>
                {theme == "dark" ? (
                    <SunIcon
                        className={classNames(styles.logo, styles.themePickerIcon)}
                        onClick={() => {
                            setIsOpen(!isOpen)
                        }}
                    />
                ) : (
                    <MoonIcon
                    className={classNames(styles.logo, styles.themePickerIcon)}
                        onClick={() => {
                            setIsOpen(!isOpen)
                        }}
                    />
                )} 
                {isOpen && (

                    <div className={styles.themeDropdown}>
                        <div
                            onClick={() => {
                                useTheme('dark')
                                setIsOpen(false)
                            }}
                        >
                            Dark Mode
                        </div>
                        <div
                            onClick={() => {
                                useTheme('light')
                                setIsOpen(false)
                            }}
                        >
                            Light Mode
                        </div>
                        <div
                            onClick={() => {
                                useTheme('system')
                                setIsOpen(false)
                            }}
                        >
                            System
                        </div>
                    </div> 

                )}
            </div>
        </>
    )
}

export default ThemePicker