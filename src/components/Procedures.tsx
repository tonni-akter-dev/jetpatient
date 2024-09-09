'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import axios from 'axios'
import Skeleton from 'react-loading-skeleton'


const Procedures = () => {

    const [procedures, setProcedures] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        axios.get('https://api.jetpatient.dev/api/proceduretypes/?format=json')
            .then(response => {
                setProcedures(response?.data?.results);
                setLoading(false);
            })
            .catch(error => {
                console.error("There was an error fetching the procedure data!", error);
                setLoading(false);
            });
    }, []);


    return (
        <div className='container'>
            <div className='pt-5 pb-4'>
                <p className='text-[20px] font-poppins text-[#1e1f26] font-medium leading-[30px] '>Popular Procedures</p>
            </div>
            <div className="grid lg:grid-cols-4 grid-cols-1 gap-4 mb-8">
                <div className='relative '>
                    <div className='h-[352px] w-full overflow-hidden rounded-[24px]'>

                        {loading ? (
                            <Skeleton height={352} />
                        ) : (
                            <Link href={`/proceduretypes/${procedures[5]?.id}`}>
                                <Image width={316} height={352} className='h-full w-full object-cover  transform transition duration-500 hover:scale-110' src={procedures[5]?.image} alt="" /></Link>
                        )}

                    </div>
                    <p className='absolute h-[32px] flex items-center bottom-4 left-4 px-[8px] bg-[#ffffff] rounded-[100px] text-base prompt-regular cursor-pointer '>{procedures[5]?.name}</p>
                </div>
                <div className='flex flex-col gap-4'>
                    <div className="relative">
                        <div className='h-[200px] w-full overflow-hidden rounded-[24px]  '>
                            {loading ? (
                                <Skeleton height={200} />
                            ) : (
                                <Link href={`/proceduretypes/${procedures[4]?.id}`}>
                                    <Image width={100} height={200} className='h-full w-full object-cover  transform transition duration-500 hover:scale-110' src={procedures[4]?.image} alt="" /></Link>

                            )}
                        </div>
                        <p className='absolute h-[32px] flex items-center bottom-4 left-4 px-[8px] bg-[#ffffff] rounded-[100px] text-base prompt-regular cursor-pointer '>{procedures[4]?.name}</p>
                    </div>
                    <div className="relative">
                        <div className='h-[136px] w-full overflow-hidden rounded-[24px]'>

                            {loading ? (
                                <Skeleton height={136} />
                            ) : (
                                <Link href={`/proceduretypes/${procedures[0]?.id}`}> <Image height={136} width={100} className='h-full w-full object-cover  transform transition duration-500 hover:scale-110' src={procedures[0]?.image} alt="" /></Link>

                            )}
                        </div>
                        <p className='absolute h-[32px] flex items-center bottom-4 left-4 px-[8px] bg-[#ffffff] rounded-[100px] text-base prompt-regular cursor-pointer'>{procedures[0]?.name}</p>
                    </div>
                </div>
                <div className='relative'>
                    <div className='h-[352px] w-full overflow-hidden rounded-[24px]'>

                        {loading ? (
                            <Skeleton height={352} />
                        ) : (
                            <Link href={`/proceduretypes/${procedures[3]?.id}`}> <Image width={100} height={352} className='h-full w-full object-cover  transform transition duration-500 hover:scale-110'
                                src={procedures[3]?.image} alt="" /></Link>
                        )}
                    </div>
                    <p className='absolute h-[32px] flex items-center bottom-4 left-4 px-[8px] bg-[#ffffff] rounded-[100px] text-base prompt-regular cursor-pointer'>{procedures[3]?.name}</p>
                </div>
                <div className='flex flex-col gap-4'>
                    <div className="relative">
                        <div className='h-[136px] w-full rounded-[24px] overflow-hidden'>


                            {loading ? (
                                <Skeleton height={136} />
                            ) : (
                                <Link href={`/proceduretypes/${procedures[2]?.id}`}> <Image width={100} height={136} className='h-full w-full object-cover  transform transition duration-500 hover:scale-110'
                                    src={procedures[2]?.image}
                                    alt="" /></Link>
                            )}
                        </div>
                        <p className='absolute h-[32px] flex items-center bottom-4 left-4 px-[8px] bg-[#ffffff] rounded-[100px] text-base prompt-regular cursor-pointer'>{procedures[2]?.name}</p>
                    </div>
                    <div className="relative">
                        <div className='h-[200px] w-full rounded-[24px] overflow-hidden'>

                            {loading ? (
                                <Skeleton height={200} />
                            ) : (
                                <Link href={`/proceduretypes/${procedures[1]?.id}`}> <Image width={100} height={200} className='h-full w-full object-cover  transform transition duration-500 hover:scale-110' src={procedures[1]?.image} alt="" /></Link>
                            )}
                        </div>
                        <p className='absolute h-[32px] flex items-center bottom-4 left-4 px-[8px] bg-[#ffffff] rounded-[100px] text-base prompt-regular cursor-pointer'>{procedures[1]?.name}</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Procedures
