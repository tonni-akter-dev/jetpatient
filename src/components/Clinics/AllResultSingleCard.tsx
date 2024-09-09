import Image from 'next/image'
import React from 'react';
import cs1 from '../../assets/cs4+.png';
import air2 from '../../assets/air2.png';
import airport from '../../assets/local_airport.svg';
import procedureicon from '../../assets/procedureicon.svg';
import doctoricon from '../../assets/doctoricon.png';
import { FiAlertCircle } from 'react-icons/fi';

const AllResultSingleCard = () => {
    return (
        <>
            <div className='bg-white rounded-[24px]   font-prompt shadow-desShadow  p-[16px]'>

                <div className='overflow-hidden w-full rounded-[24px]'>
                    <Image className='transform transition duration-500 hover:scale-110 w-full pb-0 h-[226px] object-cover'
                        src={cs1} alt="" />
                </div>

                <p className='text-[#1e1f26] text-xl font-medium leading-[30px] mt-[10px] '>Republica Smiles</p>
                <p className='text-[#707071] font-[300] text-sm leading-[22px] mb-5 '>Mexico City, Mexico</p>

                <div>
                    <div className='flex flex-wrap items-start lg:gap-[22px] gap-2'>
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

                {/* cirtifications */}

                <div className='flex flex-wrap lg:gap-0 gap-2 justify-between mt-5'>
                    <p className='text-[#1e1f26]  text-base font-medium'>Certifications / Awards</p>
                    <div className='text-black text-base leading-[21px] flex gap-1 items-center '>ISAPS | JCI | MTA
                        <div className="relative group">
                            <FiAlertCircle style={{ color: "#707071", height: "15px", width: "16px" }} />
                            <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 w-max px-2 py-1 bg-gray-700 text-white text-sm rounded opacity-0 cursor-pointer group-hover:opacity-100 transition-opacity duration-300">
                                Tooltip text goes here
                            </div>
                        </div>
                    </div>
                </div>

                {/* starting point */}
                <div className='flex lg:flex-row flex-col lg:gap-0 gap-3 justify-between items-center mt-[21px] '>
                    <p className='text-lg font-semibold text-[#1e1f26] leading-[23px] whitespace-nowrap  '>Starting at $1,200</p>
                    <button className='lg:w-[200px] w-full h-[34px] border border-[#0acaff] text-[#0acaff] text-sm font-prompt font-medium leading-[18px] outline-none rounded-lg hover:bg-[#0acaff] hover:text-white transition-all duration-500 ease-in-out  '>SEE BOOKING OPTIONS</button>
                </div>
            </div>
        </>
    )
}

export default AllResultSingleCard