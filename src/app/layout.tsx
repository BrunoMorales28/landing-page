import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '[Your brand here]',
  description: '[Brand subtitle/catchphrase]',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar/>
        <main className='relative overflow-hidden'>
          {children}
        </main>
        <Footer/>  
      </body>
    </html>
  )
}
