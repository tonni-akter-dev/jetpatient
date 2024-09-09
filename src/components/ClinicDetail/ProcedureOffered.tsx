import medical from '@/assets/medical.png'
import drive from '@/assets/drive.png'
import bed from '@/assets/bed.png'
import Image from 'next/image'
import { OfferedData } from '@/utils/offeredData'


const ProcedureOffered = ({ step }: any) => {

    return (
        <div className='bg-[#f0f0f0] pb-[32px] pt-[24px]'>
            <div className='container'>
                <h3 className='prompt-medium text-[20px] text-primary mb-4'>Procedures Offered</h3>
                <div className='grid grid-cols-12 gap-4'>
                    {OfferedData.map(data => (
                        <div key={data.title} className="lg:col-span-3 col-span-12">
                            <div className='p-2 bg-white rounded-[20px] flex flex-col justify-between h-full'>
                                <div className='flex flex-col flex-grow'>

                                    <div className='overflow-hidden h-[152px] w-[100%] rounded-[24px]'>
                                        <Image width={300} height={152} className='mb-2 w-full transform transition duration-500 hover:scale-110' src={data.img} alt="off1" />
                                    </div>

                                    <div className='ps-1'>
                                        <h4 className='text-primary text-base prompt-medium leading-[24px] mb-2'>{data.title}</h4>
                                        <p className='flex gap-2 items-center'>
                                            <Image width={14} height={14} className='w-[14px] h-[14px]' src={medical} alt="off1" />
                                            <span className='text-primary text-[14px]'>{data.time}</span>
                                        </p>
                                        <p className='flex gap-2 items-center'>
                                            <Image width={14} height={14} className='w-[14px] h-[14px]' src={drive} alt="off1" />
                                            <span className='text-primary text-[14px]'>{data.service}</span>
                                        </p>
                                        <p className='flex gap-2 items-center'>
                                            {data.place && <Image width={14} height={14} className='w-[14px] h-[14px]' src={bed} alt="off1" />}
                                            <span className='text-primary text-[14px]'>{data.place}</span>
                                        </p>
                                    </div>
                                </div>
                                <p className='text-primary text-[14px] mt-2'>{data.desc}</p>

                                <div className='flex gap-3'>
                                    <button className=' hover:bg-white hover:text-[#1E1F26] transition-all ease-in-out duration-300 border border-[#1E1F26] bg-[#1E1F26] mt-3 text-white rounded-[100px] h-[34px] w-full text-sm '>Starting at $1800</button>
                                    <button className=' hover:bg-white hover:text-[#1E1F26] transition-all ease-in-out duration-300 border border-[#1E1F26] bg-[#1E1F26] mt-3 text-white rounded-[100px] h-[34px] w-full text-sm '>Learn More</button>
                                </div> 
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProcedureOffered



