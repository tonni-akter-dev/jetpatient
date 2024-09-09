import Link from 'next/link'
import React from 'react'

const AllDestination = () => {
    return (
        <div className='container mb-[50px] '>

            <div className="flex lg:flex-row lg:mx-0 mx-4 text-start flex-col lg:gap-0 gap-5 items-center justify-between font-prompt">
                <p className='lg:text-xl text-base text-[#032d4b] font-normal '><span className='font-medium'> See all destinations and procedures available on JetPatient.</span> <br />
                    Waiting on something we dont have? Sign up to get notified.</p>
                <div className='flex flex-wrap gap-7'>
                    <Link href={`/destination`}>    <button className='border border-[#0acaff] hover:bg-[#0acaff] hover:text-white bg-white text-[#0acaff] font-medium lg:h-[55px] h-[40px] whitespace-nowrap lg:w-[275px] w-full rounded-[100px] text-sm transition-all duration-500 ease-in-out'>
                        See All Destinations
                    </button></Link>
                    <Link href={`/procedure-categories`}>
                        <button className='border border-[#0acaff] hover:bg-[#0acaff] hover:text-white bg-white text-[#0acaff] font-medium lg:h-[55px] h-[40px] whitespace-nowrap lg:w-[275px] w-full rounded-[100px] text-sm transition-all duration-500 ease-in-out'>
                            See All Procedures
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default AllDestination