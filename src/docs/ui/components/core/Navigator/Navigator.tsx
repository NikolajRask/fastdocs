import React from 'react'
import styles from './navigator.module.scss'
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons'
import { useDocsContext } from '@/docs/context/context'
import useSettings from '@/docs/settings'

const Navigator = () => {

  const { getNeighbourPage, page, setPage } = useDocsContext()

  return (
    <div className={styles.navigator}>
      <div 
        className={styles.item}
        onClick={() => {
          if (getNeighbourPage(page).previous != null) {
            setPage(getNeighbourPage(page).previous ?? useSettings("defaultPage"))
          }
        }}
      >
        <ChevronLeftIcon/>
        <span>{getNeighbourPage(page).previous}</span>
      </div>
      <div 
        className={styles.item}
        onClick={() => {
          if (getNeighbourPage(page).next != null) {
            setPage(getNeighbourPage(page).next ?? useSettings("defaultPage"))
          }
        }}
      >
        <span>{getNeighbourPage(page).next}</span>
        <ChevronRightIcon/>
      </div>
    </div>
  )
}

export default Navigator
