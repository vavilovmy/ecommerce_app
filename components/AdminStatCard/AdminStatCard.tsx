import React from 'react'
import styles from './AdminStatCard.module.scss'

function AdminStatCard() {
  return (
    <div className={styles.statCardWrapper}>
      <h2 className={styles.cardHeading}>Статистика по</h2>
      <p className={styles.cardFirstValue}>Первое значение</p>
      <p className={styles.cardSecondValue}>Второе значение</p>
    </div>
  )
}

export default AdminStatCard
