import './globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Lucy + Keith',
//   description: 'bee-were',
//   icons: {
//     icon: '/favicon.png'
//   }
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js" async></script>

      <body className={inter.className}>{children}</body>
    </html>
  )
}
