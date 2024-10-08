import React from 'react'
import styles from '../core.module.scss'
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons'
import { useDocsContext } from '@/docs/context/context'
import useSettings from '@/docs/utils/settings/use-settings'

const Navigator = ({
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) => {

  const { getNeighbourPage, page, setPage } = useDocsContext()

  return (
    <div className={styles.navigator} {...rest}>
      <div 
        className={getNeighbourPage(page).previous != null ? styles.item : styles.itemHidden}
        onClick={() => {
          if (getNeighbourPage(page).previous != null) {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            setPage(getNeighbourPage(page).previous ?? useSettings().defaultPage)
          }
        }}
      >
        <ChevronLeftIcon/>
        <span>{getNeighbourPage(page).previous}</span>
      </div>
      {getNeighbourPage(page).next &&
        <div 
          className={styles.item}
          onClick={() => {
            if (getNeighbourPage(page).next != null) {
              // eslint-disable-next-line react-hooks/rules-of-hooks
              setPage(getNeighbourPage(page).next ?? useSettings().defaultPage)
            }
          }}
        >
          <span>{getNeighbourPage(page).next}</span>
          <ChevronRightIcon/>
        </div>
      }
    </div>
  )
}

export default Navigator
