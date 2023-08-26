import { getPages } from '@/sanity/sanity-utils'
import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import  Link  from 'next/link'
import {ThemeProvider} from 'next-themes'
import Providers from './providers'
import ThemeSwitcher from './ThemeSwitcher'

// layout for the site portion of the website
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My Awesome site using next + sanity',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  // get all pages
  const pages = await getPages();

  return (
    <html lang="en" className="dark">
      
      
      <body className=" mx-auto ">
        <Providers>
          <header className='w-full flex items-center justify-between border-b border-stone-800 pl-11 pr-5 h-20 bg-gradient-to-r from-indigo-400 to-cyan-400'>
            <Link href="/" className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-xl font-bold">
              Jason
            </Link>
           
            <div className="flex items-center gap-5 text-xl ">
              <Link href={`/`} className='hover:underline'>Home</Link>
              {pages.map((page) => (
                <Link key={page._id} href={`/${page.slug}`} className="hover:underline">
                  {page.title}
                </Link>
              ))}
               <ThemeSwitcher/>
            </div>
          </header>
          <main className="py-20">{children}</main>
        </Providers>
      </body>
    </html>
  )
}
