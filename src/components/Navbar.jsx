import React from 'react'

const Navbar = () => {
  return (
    <nav className='sticky top-4 z-20 w-[45%] my-0 mx-auto py-3 bg-[#323f4b] text-white rounded-full shadow-dark'>
      <ul role='list' className='list-none flex justify-between'>
        <li className='w-1/4 text-center justify-center'><a className='text-lg font-light hover:font-bold hover:tracking-wider p-2 transition-all' href="">Home</a></li>
        <li className='w-1/4 text-center justify-center'><a className='text-lg font-light hover:font-bold hover:tracking-wider p-2 transition-all' href="#about">About</a></li>
        <li className='w-1/4 text-center justify-center'><a className='text-lg font-light hover:font-bold hover:tracking-wider p-2 transition-all' href="#credits">Credits</a></li>
        <li className='w-1/4 text-center justify-center'><a className='text-lg font-light hover:font-bold hover:tracking-wider p-2 transition-all' href="#contactUs">Contacts</a></li>
        <li className='w-1/4 text-center justify-center'><a className='text-lg font-light hover:font-bold hover:tracking-wider p-2 transition-all' href="#footer">References</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
