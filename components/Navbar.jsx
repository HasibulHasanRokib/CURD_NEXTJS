import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-gray-800 flex justify-between items-center py-3 px-4'>
    <div className="">
        <Link href={"/"} className='font-bold text-white text-2xl'>CRUD</Link>
    </div>
    <Link href={'/addTopic'} className='bg-white px-3 py-2'>Add Topic</Link>
    </div>
  )
}

export default Navbar
