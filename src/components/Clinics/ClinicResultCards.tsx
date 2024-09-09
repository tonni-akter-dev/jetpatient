'use client'
import Image from 'next/image'
import cs1 from '../../assets/cs1.png';
import air2 from '../../assets/air2.png';
import airport from '../../assets/local_airport.svg';
import sailing from '../../assets/sailing.svg';
import available from '../../assets/available.png';
import SeeAllResults from './SeeAllResults';
import { FiAlertCircle } from 'react-icons/fi';
import Link from 'next/link';
const ClinicResultCards = ({ id,clinicResults, }: any) => {

    return (
        <div className='m-[20px]'>

            <div className="grid lg:grid-cols-3 grid-cols-1 gap-[60px] my-[32px]">
                {clinicResults?.map((clinicResult: any) => (
                    <>
                        <ClinicCard clinicResult={clinicResult} />
                    </>
                ))}
            </div>
            <div className='h-[3px] mx-[20px] bg-[#1e1f26] '></div>

            <SeeAllResults />
        </div>
    )
}

export default ClinicResultCards;


const ClinicCard = ({ clinicResult }: any) => {
    return (
        <>

            <div className='bg-white rounded-[24px]   font-prompt shadow-desShadow  p-[16px]'>
                <div className='relative'>
                    <div className='overflow-hidden w-full rounded-[24px]'>
                        <Image className='transform transition duration-500 hover:scale-110 w-full pb-0 h-[226px] object-cover'
                            src={cs1} alt="" />
                    </div>
                    <div className='absolute top-2 left-2'>
                        <button className='w-[200px] h-[32px] rounded-[100px] bg-[#c8edfd] text-base font-prompt leading-[24px] outline-none '> Closest To You: </button>
                    </div>
                </div>
                <p className='text-[#1e1f26] text-xl font-medium leading-[30px] mt-[10px] '>{clinicResult?.clinic?.name}</p>
                <p className='text-[#707071] font-[300] text-sm leading-[22px] mb-5 '>{clinicResult?.clinic?.location?.country}</p>

                <div>
                    <div className='flex justify-between  '>
                        <div className='flex gap-2 items-center'>
                            <Image width={19} height={27} src={airport} alt="" />
                            <p className='text-[#000000] text-sm leading-4'>5 Hour Travel Time</p>
                        </div>
                        <p className='text-[#1e1f26] text-base font-medium leading-[24px]  '>Certifications / Awards</p>
                    </div>

                    <div className='flex justify-between '>
                        <div className='flex gap-2 items-center'>
                            <Image width={19} height={27} src={air2} alt="" />
                            <p className='text-[#000000] text-sm leading-4'>5 Day Trip</p>
                        </div>
                        <div>
                            <div className='text-[#1e1f26] text-sm  leading-[24px] flex gap-1 items-center justify-end '>ISAPS
                                <div className="relative group">
                                    <FiAlertCircle style={{ color: "#707071", height: "18px", width: "13px" }} />
                                    <div className="absolute  left-[50px] top-[-5px] transform -translate-x-1/2  mb-2 w-max px-2 py-1 bg-gray-700 text-white text-sm rounded opacity-0 cursor-pointer group-hover:opacity-100 transition-opacity duration-300">
                                        Tooltip1
                                    </div>
                                </div>

                            </div>

                            <div className='text-[#1e1f26] text-sm  text-end leading-[24px] flex gap-1 items-center  justify-end '>JCI
                                <div className="relative group">
                                    <FiAlertCircle style={{ color: "#707071", height: "18px", width: "13px" }} />
                                    <div className="absolute  left-[50px] top-[-5px] transform -translate-x-1/2 mb-2 w-max px-2 py-1 bg-gray-700 text-white text-sm rounded opacity-0 cursor-pointer group-hover:opacity-100 transition-opacity duration-300">
                                        Tooltip2
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='flex justify-between '>
                        <div className='flex gap-2 items-center'>
                            <Image width={19} height={27} src={sailing} alt="" />
                            <p className='text-[#000000] text-sm leading-4'>Tropical/Beach  </p>
                        </div>
                        <div className='text-[#1e1f26] text-sm  leading-[24px] flex gap-1 items-center whitespace-nowrap  '>Medical Tourism
                            <div className="relative group">
                                <FiAlertCircle style={{ color: "#707071", height: "18px", width: "13px" }} />
                                <div className="absolute left-[50px] top-[-5px] transform -translate-x-1/2  mb-2 w-max px-2 py-1 bg-gray-700 text-white text-sm rounded opacity-0 cursor-pointer group-hover:opacity-100 transition-opacity duration-300">
                                    Tooltip3
                                </div>
                            </div>

                        </div>
                    </div>


                    <div className='flex justify-between mt-[10px]'>
                        <div className='flex gap-2 items-center'>
                            <Image width={19} height={27} src={available} alt="" />
                            <p className='text-[#000000] text-sm leading-4'>Available in January</p>
                        </div>
                    </div>
                </div>
                {/* starting point */}
                <div className='flex flex-wrap lg:justify-between  justify-center lg:gap-0 gap-3 items-center mt-[21px] '>
                    <p className='text-lg font-semibold text-[#1e1f26] leading-[23px] whitespace-nowrap  '>Starting at ${clinicResult?.price_starts}</p>

                    <Link href={`/clinic-detail/${clinicResult.id}`}>
                        <button className='lg:w-[200px] w-full h-[34px] border border-[#0acaff] text-[#0acaff] text-sm font-prompt font-medium leading-[18px] outline-none rounded-lg  hover:bg-[#0acaff] hover:text-white transition-all duration-500 ease-in-out'>SEE BOOKING OPTIONS</button>
                    </Link>
                </div>
            </div>
        </>
    )
}