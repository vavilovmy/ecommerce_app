import React from 'react'
import styles from "./Header.module.scss"
import Link from 'next/link';

function Header({ 
  headings = [],
  links = []
}: { 
  headings: string[];
  links: string[];
  }) {
  return (
    <header className={styles.header}>
      <nav>
         <ul>
            {headings.map((item, index) => 
              <Link key={index} href={links[index]}>
                <li key={index}>{item}</li>
              </Link>
            )}
         </ul>
      </nav>
    </header>
  )
}

export default Header
