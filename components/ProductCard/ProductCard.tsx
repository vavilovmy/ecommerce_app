import React from 'react'
import styles from './ProductCard.module.scss'
import Image from 'next/image'

function ProductCard({
   heading, 
   price, 
   description}: 
   {
   heading: string; 
   price: string | number; 
   description: string;
   }) {
  return (
    <div className={styles.cardWrapper}>
      <Image 
         width={480}
         height={300}
         src='/placeholder.webp'
         alt=''
      />
      <h3>{heading}</h3>
      <p className={styles.price}>₽{price}</p>
      <p className={styles.description}>{description}</p>
      <div className={styles.buttonWrapper}>
         <button className={styles.purchaseBtn}>Приобрести</button>
         <button className={styles.purchaseBtn}>Узнать больше</button>
      </div>
    </div>
  )
}

export default ProductCard
