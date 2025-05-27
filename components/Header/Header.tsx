"use client"

import React from 'react'
import styles from "./Header.module.scss"
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Header({ 
  headings = [],
  links = []
}: { 
  headings: string[];
  links: string[];
  }) {

  const currentPath = usePathname();

  return (
    <header className={styles.header}>
      <nav>
         <ul>
            {headings.map((item, index) => 
              <Link key={index} href={links[index]}>
                <li 
                key={index}
                className={links[index] === currentPath ? `${styles.activeLink}` : ''}
                >
                  {item}
                </li>
              </Link>
            )}
         </ul>
      </nav>
    </header>
  )
}

export default Header
