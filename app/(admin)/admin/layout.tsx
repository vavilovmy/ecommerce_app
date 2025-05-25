import Header from '@/components/Header/Header'
import React from 'react'

function shopLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <>
         <Header headings={['главная', "товары", "мои заказы"]}/>
         <main>
            {children}
         </main>
      </>
  )
}

export default shopLayout;