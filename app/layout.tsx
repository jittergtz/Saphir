import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import { Toaster } from '@/components/ui/toaster'
import Provider from '@/components/Provider'



const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})
export const metadata: Metadata = {
  title: 'Saphir take Notes',
  description: 'Fast Note Editor free',
  icons: [
    {
      url: "./img/logo-metal.jpg"
    }
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider
    appearance={{
      variables: {
        colorPrimary: "black",
        colorText: "black"
      }
    }} >
         
    <html className='html' lang="en" >
   
     
      <body className={`${roboto.className} bg-black`}>
      
        <Provider>
          {children}
          </Provider>
   
      <Toaster/>



      </body>
  
     
     
    </html>
 
    </ClerkProvider>



  
  )
}
