


'use client'
import React, { useEffect, useState } from 'react'
import HighlitedHeader from './HighlitedHeader'
import ClinicSearch from '../Search/ClinicSearch'
import ConsideringCard from './ConsideringCard'
import HighlitedLocation from './HighlitedLocation'
import Pagination from '../Pagination/Pagination'
import axios from 'axios'
import Loader from '@/shared/Loader'

const WorthConsidering = ({ id }: any) => {
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const [currentPage, setCurrentPage] = useState<number>(1);
    const itemsPerPage = 3;

    useEffect(() => {
        axios.get(`https://api.jetpatient.dev/api/region/${id}/countries/`)
            .then(response => {
                setData(response.data);
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
    }, [id]);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentData = data?.slice(startIndex, startIndex + itemsPerPage);

    return (
        <>
            <div className='container my-[50px] '>
                <ClinicSearch />
                <HighlitedHeader />
                <div className="grid lg:grid-cols-3 grid-cols-1 gap-[60px] my-[32px] mx-[20px]">
                    <ConsideringCard />
                    <ConsideringCard />
                    <ConsideringCard />
                </div>
                <div className='h-[3px] mx-[20px] bg-[#1e1f26]'></div>



                <h2 className='text-[24px] text-[#1e1f26] leading-[36px] font-semibold mx-[20px] mt-5 '>Highlighted Locations</h2>
                {loading ? (
                    <Loader />
                ) : (
                    <>
                        <div className="grid lg:grid-cols-3 grid-cols-1 gap-x-[52px] gap-y-[34px] my-[32px] mx-[20px]">
                            {currentData?.map((country: any, index: number) => (
                                <HighlitedLocation key={index} country={country} />
                            ))}
                        </div>
                        <Pagination
                            totalItems={data?.length}
                            itemsPerPage={itemsPerPage}
                            currentPage={currentPage}
                            onPageChange={handlePageChange}
                        />
                    </>
                )}
            </div>


        </>
    );
}

export default WorthConsidering;
