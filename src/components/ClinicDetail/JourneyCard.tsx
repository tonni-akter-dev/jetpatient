import React from 'react'
import dentalAlignment from '@/assets/dental-alignment.png'
import drive from '@/assets/car1.png';
import bed from '@/assets/bed1.png';
import s1 from '@/assets/s1.png';

import Image from 'next/image'
import PatientJourney from './PatientJourney';

const JourneyCard = ({ clinicResults }: any) => {

    return (
        <>
            <div className='bg-white px-[6px] py-[8px] shadow-card mt-[18px] rounded-[20px]'>
                <div className='overflow-hidden w-full h-[137px] rounded-[20px]'>
                    <Image className='rounded-[20px] mb-[6px] w-full h-full transform transition duration-500 hover:scale-110' width={0} height={0} src={dentalAlignment} alt="dental" />
                </div>

                <div className='ps-[15px] mt-[5px] ' >
                    <h2 className='text-base text-[#1e1f26] font-prompt leading-6 '>
                        {clinicResults?.name ? clinicResults.name : "Dental Alignments"}
                    </h2>
                    <div className='text-[12px]  prompt-light mt-[5px]'>
                        <div className='flex gap-2.5   '>
                            <Image width={11} height={8} src={s1} alt="" />
                            <p>1 - 2 Days</p>
                        </div>
                        <div className='flex gap-2.5   '>
                            <Image src={drive} alt="" />
                            <p>Transport Provided</p>
                        </div>
                        <div className='flex gap-2.5   '>
                            <Image src={bed} alt="" />
                            <p>On-Site Recovery</p>
                        </div>
                    </div>
                    <p className='text-[12px] text-[#707071]  prompt-light mt-[7px] '>Non-refundable, Requires Virtual Follow-Up</p>
                    <div className='mt-2 flex gap-[25px] justify-between '>
                        <button className='bg-[#1e1f26] hover:bg-white hover:text-[#1E1F26] transition-all ease-in-out duration-300 border border-[#1E1F26]   rounded-[100px] text-[#ffffff] text-sm prompt-normal w-[176px] h-[31px] '>Starting at ${clinicResults?.price_starts ? clinicResults?.price_starts : 1800}</button>
                        <button className='bg-[#1e1f26] hover:bg-white hover:text-[#1E1F26] transition-all ease-in-out duration-300 border border-[#1E1F26]   rounded-[100px] text-[#ffffff] text-sm prompt-normal w-[176px] h-[31px] '>Learn More</button>
                    </div>
                </div>
            </div>


            <PatientJourney />

        </>
    )
}

export default JourneyCard 