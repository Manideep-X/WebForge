import React from 'react'

const Topbar = () => {
  return (
    <nav className='flex justify-between py-4 px-[8vw]'>
      <div className="flex-initial w-64">
        <img src="/src/assets/logo1.png" alt="Logo"/>
      </div>
      <div className='flex-initial w-60'>
        <button className='z-10 text-lg font-black bg-[#132330de] text-white py-2 px-5 mt-4 rounded-full hover:bg-[#182a38f3] active:bg-[#000000] shadow-xl active:shadow-none transition-all'>Sign-in/Register</button>
      </div>
    </nav>
  )
}

export default Topbar
