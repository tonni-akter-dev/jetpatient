'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import logo from '@/assets/logo.jpg'
import Link from 'next/link'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
    
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="bg-[#033254] sticky top-0 z-50 px-[20px]">
            <div className='container w-full py-[10px] flex justify-between items-center'>
                <div className='flex items-center gap-[20px]'>
                    <Link href="/"> <Image height={83} className='lg:w-[322px] w-[200px] mr-[70px]' src={logo} alt="logo" /></Link>
                    <div className="hidden md:flex">
                        <ul className='flex items-center text-white text-sm gap-[20px]'>
                            <li><Link href="/procedure-categories">Procedures</Link></li>
                            <li><Link href="/destination">Destinations</Link></li>
                            <li><Link href="#">About</Link></li>
                            <li><Link href="/clinics">For Clinics</Link></li>
                            <li><Link href="/highlited-destination">Community</Link></li>
                        </ul>
                    </div>
                </div>
                <div className='hidden md:flex gap-[16px] items-center'>
                    <button className='text-white rounded-[100px] hover:border-[#03ffff] border border-[#ffffff] w-[116px] h-[38px] py-[0] px-[8px] text-sm hover:bg-[#03ffff] hover:text-[#000000] transition-all duration-500 ease-in-out'>Sign up</button>
                    <button className='rounded-[100px] w-[108px] h-[38px] py-[0] px-[8px] bg-[#03ffff] text-[#000000] text-sm hover:bg-transparent hover:text-[#ffffff] hover:border hover:border-[#ffffff] transition-all duration-500 ease-in-out'>Log in</button>
                </div>
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu}>
                        {isOpen ? <FaTimes className="text-white" size={24} /> : <FaBars className="text-white" size={24} />}
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden bg-[#033254] mx-[20px] ">
                    <ul className='flex flex-col items-center text-white text-sm gap-[20px] py-4'>
                        <li><Link href="/procedures">Procedures</Link></li>
                        <li><Link href="/destination">Destinations</Link></li>
                        <li><Link href="#">About</Link></li>
                        <li><Link href="/clinics">For Clinics</Link></li>
                        <li><Link href="/highlited-destination">Community</Link></li>
                        <li>
                            <button className='text-white rounded-[100px] hover:border-[#03ffff] border border-[#ffffff] w-[116px] h-[38px] py-[0] px-[8px] text-sm hover:bg-[#03ffff] hover:text-[#000000] transition-all duration-500 ease-in-out'>Sign up</button>
                        </li>
                        <li>
                            <button className='rounded-[100px] w-[108px] h-[38px] py-[0] px-[8px] bg-[#03ffff] text-[#000000] text-sm hover:bg-transparent hover:text-[#ffffff] hover:border hover:border-[#ffffff] transition-all duration-500 ease-in-out'>Log in</button>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    )
}

export default Navbar
