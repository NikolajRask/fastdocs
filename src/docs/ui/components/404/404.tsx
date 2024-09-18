import React from 'react'
import styles from '../components.module.scss'

const Page404 = () => {
  return (
    <div className={styles.missingPage}>
        <h2>404</h2>
        <p>We couldn't find the page you were looking for!</p>
    </div>
  )
}

export default Page404