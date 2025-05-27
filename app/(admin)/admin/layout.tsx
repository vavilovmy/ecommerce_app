import Header from '@/components/Header/Header'
import React from 'react'

function shopLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header 
        headings={['статистика', "товары", "клиенты", "продажи"]} 
        links={["/admin", "/admin/products", "/admin/clients", "/admin/sales"]}
      />
      <main>
        {children}
      </main>
    </>
  )
}

export default shopLayout;