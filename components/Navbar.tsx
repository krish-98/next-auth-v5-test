'use client'

import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  const { data: session, status } = useSession()

  console.log('Navbar session:', session)
  console.log('Navbar session status:', status)

  return (
    <nav className="flex items-center justify-between p-4 bg-slate-800 text-white">
      <Link href="/">Next Auth V5</Link>

      <div className="space-x-6">
        <Link
          href={'/auth/signin'}
          className="bg-white text-black px-4 py-2 rounded-lg"
        >
          Sign In
        </Link>
        <button className="bg-white text-black px-4 py-2 rounded-lg">
          Sign Out
        </button>
      </div>
    </nav>
  )
}
