import Image from 'next/image'
import React from 'react';
import air2 from '../../assets/air2.png';
import airport from '../../assets/local_airport.svg';
import procedureicon from '../../assets/procedureicon.svg';
import doctoricon from '../../assets/doctoricon.png';
import location from '../../assets/location1.png';
import Link from 'next/link';


const HighlitedLocation = ({ country }) => {

    return (
        <>
            <div className='bg-white rounded-[24px]   font-prompt shadow-desShadow  p-[16px]'>
                <div className='overflow-hidden w-full rounded-[24px]'>
                    <Image width={396} height={183} className='transform transition duration-500 hover:scale-110 w-full pb-0 h-[226px] object-cover'
                        src={country?.image ? country?.image : location} alt="" />
                </div>

                <p className='text-[#1e1f26] text-xl font-medium leading-[30px] mt-[10px] '>{country?.name}</p>

                <div className='mt-7'>
                    <div className='flex items-start gap-[22px] '>
                        <div >
                            <div className='flex gap-2 items-center mb-[13px]'>
                                <Image width={19} height={27} src={airport} alt="" />
                                <p className='text-[#000000] text-sm leading-4'>5 Hour Flight</p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <Image width={16} height={15} src={doctoricon} alt="" />
                                <p className='text-[#000000] text-sm leading-4'>13 Years Experience</p>
                            </div>
                        </div>

                        <div className=' '>
                            <div className='flex gap-2 items-center'>
                                <Image width={19} height={27} src={air2} alt="" />
                                <p className='text-[#000000] text-sm  leading-4'>5 Day Trip</p>
                            </div>
                            <div className='flex gap-2 items-center mt-[9px]'>
                                <Image width={16} height={15} src={procedureicon} alt="" />
                                <p className='text-[#000000] text-sm leading-4'>500+ Procedures</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* starting point */}
                <div className='flex justify-end items-center mt-[49px] '>
                    <Link href="/procedure-categories">
                        <button className='lg:w-[200px] w-full h-[34px] border  border-[#0acaff] text-[#0acaff] text-sm font-prompt font-medium leading-[18px] outline-none rounded-lg  hover:bg-[#0acaff] hover:text-white transition-all duration-500 ease-in-out '>SEE PROCEDURES</button></Link>
                </div>
            </div>
        </>
    )
}

export default HighlitedLocation