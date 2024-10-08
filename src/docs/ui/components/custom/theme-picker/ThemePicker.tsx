import React, { useEffect, useRef, useState } from 'react'
import styles from '../../components.module.scss'
import { useTheme } from '@/docs/utils/use-theme'
import { MoonIcon, SunIcon } from 'lucide-react'
import classNames from '@/docs/utils/utils'

interface ThemePickerProps {
    setLocalTheme?:  React.Dispatch<React.SetStateAction<string | null | undefined>>
}

const ThemePicker = ({
    setLocalTheme
}: ThemePickerProps) => {

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
                                // eslint-disable-next-line react-hooks/rules-of-hooks
                                useTheme('dark')
                                if (setLocalTheme) {
                                    setLocalTheme("dark")
                                }
                                setIsOpen(false)
                            }}
                        >
                            Dark Mode
                        </div>
                        <div
                            onClick={() => {
                                // eslint-disable-next-line react-hooks/rules-of-hooks
                                useTheme('light')
                                if (setLocalTheme) {
                                    setLocalTheme("light")
                                }
                                setIsOpen(false)
                            }}
                        >
                            Light Mode
                        </div>
                        <div
                            onClick={() => {
                                if (setLocalTheme) {
                                    // eslint-disable-next-line react-hooks/rules-of-hooks
                                    setLocalTheme(useTheme('system'))
                                }
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