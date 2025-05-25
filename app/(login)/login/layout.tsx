import React from 'react'

function loginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <>
         <main>
            {children}
         </main>
      </>
  )
}

export default loginLayout;