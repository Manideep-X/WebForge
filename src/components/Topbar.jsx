import React from 'react'
import { Button } from '@chakra-ui/react'

const Topbar = () => {
  return (
    <nav className='flex justify-between py-4 px-[8vw]'>
      <div className="flex-initial w-72">
        <img src="/src/assets/logo1.png" alt="Logo"/>
      </div>
      <div className='flex-initial w-60'>
        <Button className='z-10 text-lg font-black bg-[#132330de] text-white py-2 px-5 mt-4 rounded-full hover:bg-[#182a38f3] active:bg-[#000000] shadow-xl active:shadow-none transition-all'>Sign-in/Register</Button>
      </div>
    </nav>
  )
}

export default Topbar
