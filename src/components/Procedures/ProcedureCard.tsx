import Image from 'next/image'
import React from 'react'
import p1 from '@/assets/p1.png'
import air2 from '../../assets/air2.png';
import airport from '../../assets/local_airport.svg';
import doctoricon from '../../assets/doctoricon.png';
import dollar from '../../assets/dollar.png';
import Skeleton from 'react-loading-skeleton';
import Link from 'next/link';

const ProcedureCard = ({ procedure, loading }: any) => {

    return (
        <div>
            <div className='bg-white rounded-[24px]   font-prompt shadow-desShadow flex-grow-1  p-[16px]'>
                <div className='relative'>
                    <div className='overflow-hidden w-full rounded-[24px]'>
                        {
                            loading ? <Skeleton height={226} /> : <Image className='transform transition duration-500 hover:scale-110 w-full pb-0 h-[226px] object-cover' width={362} height={226} src={procedure?.image ? procedure.image : p1} alt="" />
                        }

                    </div>
                </div>
                <p className='text-[#7b7b7c] text-xl font-medium leading-[30px] mt-[10px] '>{procedure?.name}</p>
                <p className='text-[#707071] font-[300] text-sm leading-[22px] mb-[6px] '>{procedure?.medical_name}</p>
                <span className='text-[#1f1a39] text-sm mb-[43px]  line-clamp-3 '>{procedure?.description}</span>
                <div>
                    <div className='flex items-start lg:flex-row flex-col lg:gap-[50px] gap-2 mt-[37px]'>
                        <div className='' >
                            <div className='flex gap-2 items-center mb-[13px] '>
                                <Image width={19} height={27} src={doctoricon} alt="" />
                                <p className='text-[#000000] text-sm leading-4'>{procedure?.clinics} Clinics</p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <Image width={19} height={27} src={airport} alt="" />
                                <p className='text-[#000000] text-sm leading-4'>{procedure?.destinations} Destinations</p>
                            </div>
                        </div>
                        <div className=' '>
                            <div className='flex gap-2 items-center '>
                                <Image width={18} height={27} src={dollar} alt="" />
                                <p className='text-[#000000] text-sm  leading-4'>{procedure?.average_cost} Average Cost</p>
                            </div>
                            <div className='flex gap-2 items-center '>
                                <Image width={18} height={27} src={air2} alt="" />
                                <p className='text-[#000000] text-sm leading-4'>5 Day Trip</p>
                            </div>                                                                                          
                        </div>
                    </div>
                </div>
                {/* starting point */}
                <div className='flex lg:flex-row flex-col justify-between lg:items-center lg:gap-0 gap-3 mt-[21px] '>
                    <button className='w-[170px] h-[34px] border border-[#0acaff] text-[#0acaff] lg:text-sm text-[12px] font-prompt font-medium leading-[18px] outline-none rounded-lg hover:bg-[#0acaff] hover:text-white transition-all duration-500 ease-in-out '>PROCEDURE DETAILS</button>

                    <Link href={`/clinics/${procedure.id}`}>
                        <button className='w-[170px] h-[34px] border border-[#0acaff] text-[#0acaff] lg:text-sm text-[12px] font-prompt font-medium leading-[18px] outline-none rounded-lg hover:bg-[#0acaff] hover:text-white transition-all duration-500 ease-in-out '>SEE BOOKING OPTIONS</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProcedureCard