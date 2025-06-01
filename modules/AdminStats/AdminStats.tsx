import React from 'react'
import styles from './AdminStats.module.scss'
import AdminStatCard from '@/components/AdminStatCard/AdminStatCard'

function AdminStats() {
  return (
    <section className={styles.adminStats}>
      <AdminStatCard />
      <AdminStatCard />
      <AdminStatCard />
    </section>
  )
}

export default AdminStats
