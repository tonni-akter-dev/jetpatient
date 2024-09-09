import Image from 'next/image'
import React from 'react';
import airport from '../../assets/local_airport.svg';
import procedureicon from '../../assets/procedureicon2.png';
import doctoricon from '../../assets/doctoricon.png';
import location from '../../assets/pc1.png';
import Link from 'next/link';

const CategoriesCard = ({ procedure }: any) => {
    return (
        <div>


            <div className='bg-white rounded-[24px]   font-prompt shadow-desShadow  p-[16px]'>
                <div className='overflow-hidden w-full rounded-[24px]'>
                    <Image className='transform transition duration-500 hover:scale-110 w-full pb-0 h-[226px] object-cover'
                    width={396} height={226}
                        src={procedure?.image ? procedure?.image : location} alt="" />
                </div>
                <p className='text-[#1e1f26] text-xl font-medium leading-[30px] mt-[10px] capitalize '>{procedure?.name}</p>
                <p className='text-black text-sm leading-4 mt-1 mb-[29px] line-clamp-3 '>{procedure?.description}</p>

                <div className='mt-7'>
                    <div className='flex  gap-[22px] '>
                        <div >
                            <div className='flex gap-2 items-center mb-[13px]'>
                                <Image width={19} height={27} src={procedureicon} alt="" />
                                <p className='text-[#000000] text-sm leading-4'>{procedure?.procedures} Procedures</p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <Image width={16} height={15} src={airport} alt="" />
                                <p className='text-[#000000] text-sm leading-4'>{procedure?.destinations} Destinations</p>
                            </div>
                        </div>

                        <div className=' '>
                            <div className='flex gap-2 items-center mt-1'>
                                <Image width={19} height={27} src={doctoricon} alt="" />
                                <p className='text-[#000000] text-sm  leading-4'>{procedure?.clinics} Clinics</p>
                            </div>

                        </div>
                    </div>
                </div>
                {/* starting point */}
                <div className='flex justify-end items-center mt-[20px] '>
                    <Link href={`proceduretypes/${procedure?.id}`}> <button className='w-[200px] h-[34px] border border-[#0acaff] text-[#0acaff] text-sm font-prompt font-medium leading-[18px] outline-none rounded-lg  hover:bg-[#0acaff] hover:text-white transition-all duration-500 ease-in-out '>SEE PROCEDURES</button></Link>
                </div>
            </div>
        </div>
    )
}

export default CategoriesCard