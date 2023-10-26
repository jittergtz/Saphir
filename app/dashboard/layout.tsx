import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import '../globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import { Toaster } from '@/components/ui/toaster'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})
export const metadata: Metadata = {
  title: 'Saphir take Notes',
  description: 'Secure Privat notes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
  
    <html lang="en">
      <body className={roboto.className}>
        {children}
     </body>
    </html>
   
  )
}
