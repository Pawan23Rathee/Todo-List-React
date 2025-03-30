import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex justify-between p-4 bg-green-400 text-white py-4">
        <div className="logo">
            <span className='font-bold text-xl mx-8'>Todo-List</span>
        </div>
        <ul className="flex gap-8 mx-8">
          <li className='cursor-pointer hover:font-bold transition-all duration-50'>Home</li>
          <li className='cursor-pointer hover:font-bold transition-all duration-50'>About</li>
          <li className='cursor-pointer hover:font-bold transition-all duration-50'>Services</li>
          <li className='cursor-pointer hover:font-bold transition-all duration-50'>Contact</li>
        </ul>
    </nav>
  )
}

export default Navbar