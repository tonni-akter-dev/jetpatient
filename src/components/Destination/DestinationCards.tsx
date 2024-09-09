import React from 'react'
import des1 from '@/assets/des1.png'

import airport from '@/assets/local_airport.svg'
import sailing from '@/assets/sailing.svg'
import terrain from '@/assets/terrain.svg'
import city from '@/assets/city.svg'
import pagelines from '@/assets/pagelines.svg'
import Image from 'next/image'
import Link from 'next/link'


const DestinationCards = ({ country }: any) => {
    return (

        <div className='bg-white rounded-[24px] px-[23px] pb-[40px] pt-[22px] shadow-desShadow '>
            <Link href={`/highlited-destination/${country?.id}`}>
                <div className='overflow-hidden w-full rounded-[24px]'>
                    <Image width={100} height={244} className='transform transition duration-500 hover:scale-110 w-full pb-0 h-[226px] object-cover'
                        src={country?.image} alt="" />
                </div>
            </Link>
            <div className=''>
                <p className='text-xl font-medium leading-[30px]  text-center  mt-2 mb-5'>{country?.name}</p>
                <div className='text-sm text-[#000000] leading-4 items-start justify-between flex gap-5 mb-6  '>
                    <p className='flex gap-[7px] items-center '><Image width={24} height={20} src={airport} alt="" /> N/A</p>
                    <div>
                        <p className='flex gap-[7px] items-center '><Image width={24} height={20} src={sailing} alt="" />Beaches </p>
                        <p className='flex gap-[7px] items-center mt-2 '><Image width={24} height={20} src={city} alt="" />Beaches </p>
                    </div>
                    <div>
                        <p className='flex gap-[7px] items-center '><Image width={24} height={20} src={terrain} alt="" /> Mountains</p>
                        <p className='flex gap-[7px] items-center  mt-2'><Image width={24} height={20} src={pagelines} alt="" /> Mountains</p>
                    </div>
                </div>
            </div>

            <div className=''>
                <div className="flex justify-center gap-5 mb-[14px]">
                    <button className=' hover:bg-[#59DBFF] hover:border-[#59DBFF] transition-all duration-500 ease-in-out text-[#052d4b] w-full h-[34px] border border-[#052d4b] text-sm font-prompt font-medium leading-[18px] outline-none rounded-lg '>
                        Cosmetic Surgery
                    </button>
                    <button className=' hover:bg-[#59DBFF] hover:border-[#59DBFF] transition-all duration-500 ease-in-out text-[#052d4b] w-full h-[34px] border border-[#052d4b] text-sm font-prompt font-medium leading-[18px] outline-none rounded-lg '>
                        Dental
                    </button>
                </div>
                <div className="flex gap-5  justify-center mb-[14px]">
                    <button className=' hover:bg-[#59DBFF] hover:border-[#59DBFF] transition-all duration-500 ease-in-out text-[#052d4b] w-full h-[34px] border border-[#052d4b] text-sm font-prompt font-medium leading-[18px] outline-none rounded-lg '>
                        Longevity
                    </button>
                    <button className=' hover:bg-[#59DBFF] hover:border-[#59DBFF] transition-all duration-500 ease-in-out text-[#052d4b] w-full h-[34px] border border-[#052d4b] text-sm font-prompt font-medium leading-[18px] outline-none rounded-lg '>
                        Fertility
                    </button>
                </div>

            </div>
        </div>

    )
}

export default DestinationCards