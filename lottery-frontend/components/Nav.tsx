import { ConnectButton } from '@rainbow-me/rainbowkit'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function Nav() {
  const { pathname } = useRouter()
  const isHome = pathname === '/'
  const isApp = pathname.startsWith('/enter')

  return (
    <div className="flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10">
      <div className="flex justify-start lg:w-0 lg:flex-1">
        <Link href="/">
          <a>
            <img className="h-10 w-auto sm:h-12" src="/logo.png" alt="logo" />
          </a>
        </Link>
      </div>

      <div className="flex justify-start lg:w-0 lg:flex-1"></div>

      {isHome && (
        <nav className="hidden md:flex space-x-10">
          <a
            href="#about"
            className="text-base font-medium text-gray-500 hover:text-gray-900"
          >
            About
          </a>
          <a
            href="#start"
            className="text-base font-medium text-gray-500 hover:text-gray-900"
          >
            Get Started
          </a>
          <a
            href="#faq"
            className="text-base font-medium text-gray-500 hover:text-gray-900"
          >
            FAQ
          </a>
        </nav>
      )}

      <div className="md:flex items-center justify-end md:flex-1 lg:w-0 w-full">
        <ConnectButton />
      </div>
    </div>
  )
}
