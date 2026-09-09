import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
      <nav className='h-16 bg-purple-700 flex justify-between px-1 sm:px-3 items-center text-white'>
        <div className="logo font-bold text-lg">
          <Link href="/">BitLinks</Link>
        </div>

        <ul className='flex justify-center gap-1 sm:gap-4 items-center'>
          <Link href="/" className='font-bold'><li>Home</li></Link>
          <Link href="/shorten" className='font-bold'><li>Shorten</li></Link>

          <li className='flex gap-1 sm:gap-3'>
            <Link href="/shorten">
              <button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold cursor-pointer'>Try Now</button>
            </Link>

            <Link href="/github" target='_blank'>
              <button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold cursor-pointer'>GitHub</button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
