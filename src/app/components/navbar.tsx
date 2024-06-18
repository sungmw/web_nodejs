import Link from 'next/link'
import React from 'react'

export default function navbar() {
  return (
    // <div className="flex p-4">
    //   <div className="text-white text-center bg-blue-400 p-1">
    //     My React Blog
    //   </div>
    //   <div className="grow">
    //     <nav className="text-right bg-blue-600 p-1">
    //       <Link href="/">BLOG </Link>
    //       <Link href="/about">ABOUT </Link>
    //       <Link href="/project">PROJECT </Link>
    //       <Link href="/contact">CONTACT </Link>
    //     </nav>
    //   </div>
    // </div>
    <nav className="flex justify-between items-center bg-blue-400 p-2 mb-4">
      <Link className="font-bold bg-blue-100 p-1 hover:text-black" href="/">
        My React Blog{' '}
      </Link>
      <div className="font-bold font-mono p-1">
        <Link className="hover:text-black" href="/about">
          ABOUT{' '}
        </Link>
        <Link className="hover:text-black" href="/project">
          PROJECT{' '}
        </Link>
        <Link className="hover:text-black" href="/contact">
          CONTACT{' '}
        </Link>
      </div>
    </nav>
  )
}
