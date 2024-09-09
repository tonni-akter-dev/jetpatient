import Image from 'next/image'
import React from 'react';
import airport from '../../assets/local_airport.svg';
import sailing from '../../assets/sailing.svg';
import terrain from '../../assets/terrain.svg';
import lwc1 from '../../assets/lwc1.png';
import rain from '../../assets/rain.png';
import doctoricon from '../../assets/doctoricon.png';
import Link from 'next/link';


const ConsideringCard = () => {
    return (
        <>
            <div className='bg-white rounded-[24px]   font-prompt shadow-desShadow  p-[16px]'>
                <div className='relative'>
                    <div className='overflow-hidden w-full rounded-[24px]'>
                        <Image className='transform transition duration-500 hover:scale-110 w-full pb-0 h-[226px] object-cover'
                            src={lwc1} alt="" />
                    </div>

                    <div className='absolute top-2 left-2'>
                        <button className='lg:w-[200px] h-[32px] rounded-[100px] bg-[#c8edfd] text-base font-prompt leading-[24px] outline-none '> Closest To You: </button>
                    </div>
                </div>

                <p className='text-[#1e1f26] text-xl font-medium leading-[30px] mt-[10px] '>Costa rica</p>
                <p className='text-[#4d5156] font-[300] text-sm leading-[16px] mb-5 '>
                    Costa Rica is known for its beaches, volcanoes, and biodiversity. Rainforested Central American country with coastlines on the Caribbean and Pacific.
                </p>

                <div>


                    <div className='mt-7'>
                        <div className='flex  gap-[22px] '>
                            <div >
                                <div className='flex gap-2 items-center mb-[18px]'>
                                    <Image width={19} height={27} src={airport} alt="" />
                                    <p className='text-[#000000] text-sm leading-4'>27k Annual Tourists</p>
                                </div>
                                <div className='flex gap-2 items-center mb-[18px]'>
                                    <Image width={16} height={15} src={sailing} alt="" />
                                    <p className='text-[#000000] text-sm leading-4'>Beaches</p>
                                </div>

                                <div className='flex gap-2 items-center '>
                                    <Image width={19} height={27} src={terrain} alt="" />
                                    <p className='text-[#000000] text-sm leading-4'>Volcanoes</p>
                                </div>
                            </div>

                            <div className=' '>
                                <div className='flex gap-2 items-center mt-1 mb-[18px] '>
                                    <Image width={19} height={27} src={doctoricon} alt="" />
                                    <p className='text-[#000000] text-sm  leading-4'>35 Clinics</p>
                                </div>
                                <div className='flex gap-2 items-center mt-1'>
                                    <Image width={19} height={27} src={rain} alt="" />
                                    <p className='text-[#000000] text-sm  leading-4'>Rainforests</p>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
                {/* starting point */}
                <div className='flex justify-end items-center mt-[21px] '>
                    <Link href="/procedure-categories">
                        <button className='lg:w-[200px] w-full h-[34px] border border-[#0acaff] text-[#0acaff] text-sm font-prompt font-medium leading-[18px] outline-none rounded-lg uppercase hover:bg-[#0acaff] hover:text-white transition-all duration-500 ease-in-out '>SEE PROCEDURES</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default ConsideringCard