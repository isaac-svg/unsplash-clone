import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <header className='w-full flex sm:justify-between items-center flex-col sm:flex-row'>
      <div className="flex gap-4 flex-col sm:flex-row w-full items-center">
        <img src="./" alt="logo" className='self-center'/>
        {/* Input field and add button field on mobile screens */}
        <div className='w-full flex gap-2 sm:gap-8'>
          <div className='w-full relative'>
            <span className='absolute left-1 top-1/2 -translate-y-1/2'>
              <CiSearch className='w-8 h-8' />
            </span>
            <Input className='w-full pl-10 sm:w-80' placeholder='search by category' />
          </div>
          <div className=''>
            <Button className=" sm:hidden  w-12 h-full" variant="default">+</Button>
          </div>
          </div>
      </div>
      <div className="hidden sm:inline-block">
        <Button className='hidden sm:inline-block  hover:bg-green-300 text-center bg-green-400 text-lg' variant="default">Add Photo</Button>
      </div> 
    </header>
  )
}

export default Header