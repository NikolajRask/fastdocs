import React from 'react'
import styles from './navigator.module.scss'
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons'

const Navigator = () => {
  return (
    <div className={styles.navigator}>
      <div className={styles.item}>
        <ChevronLeftIcon/>
        <span>Previous Page</span>
      </div>
      <div className={styles.item}>
        <span>Next Page</span>
        <ChevronRightIcon/>
      </div>
    </div>
  )
}

export default Navigator
