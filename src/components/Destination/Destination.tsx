'use client'
import React, { useEffect, useState } from 'react'
import list from '@/assets/list.svg'
import Image from 'next/image'
import DestinationCards from './DestinationCards'
import { FiAlertCircle } from "react-icons/fi";
import axios from 'axios'
import Loader from '@/shared/Loader'


const Destination = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        axios.get('https://api.jetpatient.dev/api/region/')
            .then(response => {
                setData(response.data.results);
                setLoading(false);
            })
            .catch(err => {
                if (axios.isAxiosError(err)) {
                    setError(err.message);
                } else {
                    setError('An unexpected error occurred');
                }
                setLoading(false);
            });
    }, []);

    return (
        <div className='container mt-5 mb-6 '>
            <div className="flex lg:flex-row flex-col justify-between lg:items-center items-start m-[20px]">
                <div className="flex gap-2 items-center">
                    <div className='text-[24px] font-semibold font-prompt leading-[36px]'>Pick Your Adventure. <span className='text-[#0acaff]'> Better Care. Anywhere.</span> </div>
                    <div className="relative group">
                        <FiAlertCircle className="text-gray-500 h-5 w-5" />
                        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 w-max px-2 py-1 bg-gray-700 text-white text-sm rounded opacity-0 cursor-pointer group-hover:opacity-100 transition-opacity duration-300">
                            Tooltip text goes here
                        </div>
                    </div>


                </div>

                <div className='flex gap-6 items-center lg:my-0 my-7'>
                    <button className='w-[128px] bg-[#0ACAFF] leading-[18px]  flex justify-center items-center gap-2 text-black font-prompt text-sm  h-[38px] outline-none rounded-[100px] '>
                        <Image width={24} height={24} src={list} alt="list" />

                        My Lists</button>
                </div>
            </div>


            <div className='m-[20px]'>
                {
                    loading ? <Loader />

                        :
                        <div className="grid lg:grid-cols-3 grid-cols-1 font-prompt mt-6 gap-[58px]">
                            {
                                data.map((country: any) => (
                                    <>
                                        <DestinationCards country={country} />
                                    </>
                                ))
                            }
                        </div>
                }
            </div>
        </div>
    )
}

export default Destination