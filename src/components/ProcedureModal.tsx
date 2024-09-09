

'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import axios from 'axios';
import Loader from '@/shared/Loader';

const ProcedureModal = ({ handleProcedureClick }: any) => {

    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    
    useEffect(() => {
        const storedCareTypeID = localStorage.getItem('selectedCareTypeID');
        if (storedCareTypeID) {
            axios.get(`https://api.jetpatient.dev/api/procedure/?procedure_type=${storedCareTypeID}`)
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
        } else {
            setLoading(false);
        }
    }, []);


    return (
        <>
            <div className='bg-white rounded-[10px] border p-[15px] justify-center absolute w-[400px] z-40 h-[300px] overflow-y-scroll'>
                {loading ? (
                    <Loader />
                ) : error ? (
                    <div className='text-black text-[28px]'>Error: {error}</div>
                ) : data.length === 0 ? (
                    <div className='text-black text-[28px] font-bold'>No data found</div>
                ) : (
                    <div>
                        {data.map((procedure) => (
                            <React.Fragment key={procedure.id}>
                                <div
                                    className='flex gap-[32px] cursor-pointer'
                                    onClick={() => handleProcedureClick(procedure.name,procedure.id)}
                                >
                                    <Image width={80} height={77} src={procedure?.image} alt="procedure" />
                                    <div>
                                        <h3 className='prompt-medium text-black text-sm mb-[10px]'>{procedure?.name}</h3>
                                        <div className='flex gap-1 mb-1'>
                                            {procedure?.categories?.map((cat: any) => (
                                                <div key={cat?.id} className='flex flex-wrap'>
                                                    <button className='px-[30px] h-[18px] rounded-[16px] hover:bg-[#59DBFF] hover:border-[#59DBFF] transition-all duration-500 ease-in-out border border-[#707071] bg-[rgba(3,3,3,0)] text-[8px] prompt-medium'>
                                                        {cat}
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className='h-[1px] bg-[#c2c2c2] w-[90%] rounded-[2px] my-[10px]'></div>
                            </React.Fragment>
                        ))}
                    </div>
                )}
            </div>
        </>
    )
}

export default ProcedureModal;
