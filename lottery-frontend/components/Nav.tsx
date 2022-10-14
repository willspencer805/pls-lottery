import { ConnectButton } from '@rainbow-me/rainbowkit'
import Link from 'next/link'
import { useRouter } from 'next/router'

// export default function Nav() {
//   return (
//     <div className="md:flex items-center justify-end md:flex-1 lg:w-0">
//       <div className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
//         <ConnectButton />
//       </div>
//     </div>
//   )
// }

export default function Nav() {
  const { pathname } = useRouter()
  const isHome = pathname === '/'
  const isApp = pathname.startsWith('/app')

  return (
    <div className="flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10">
      <div className="flex justify-start lg:w-0 lg:flex-1"></div>

      <nav className="md:flex space-x-10">
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

      <div className="md:flex items-center justify-end md:flex-1 lg:w-0 w-full">
        <ConnectButton />
      </div>
    </div>
  )
}
