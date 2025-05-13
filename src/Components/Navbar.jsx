import React from 'react'

function Navbar() {
  return (
    <nav className='flex justify-between items-center p-4 bg-gray-200 '>
      <ul className='flex justify-between items-center gap-4'>
        <a href="/"> <li className='font-bold'>Home</li></a>
        <a href="/about"> <li>About</li></a>
        <a href="./login"> <li>Login</li></a>
      </ul>
      <div>
        <button className='px-4 py-2 bg-black text-white rounded-full'>Contact Abdulla J</button>
      </div>
    </nav>
  )
}

export default Navbar;