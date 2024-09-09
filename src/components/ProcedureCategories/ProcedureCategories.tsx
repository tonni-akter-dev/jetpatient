'use client'
import React, { useEffect, useState } from 'react'
import ClinicSearch from '../Search/ClinicSearch'
import Pagination from '../Pagination/Pagination'
import CategoryHeader from './CategoryHeader'
import CategoriesCard from './CategoriesCard'
import ProcedureCard from '../Procedures/ProcedureCard'
import Loader from '@/shared/Loader'
import axios from 'axios'
import { Procedure } from '@/global/types/procedureTypes'

const ProcedureCategories = () => {

    const [data, setData] = useState<Procedure[]>([]);
    const [procedureCat, setProcedureCat] = useState<Procedure[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState<number>(1);

    useEffect(() => {
        axios.get('https://api.jetpatient.dev/api/procedure/?format=json')
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

    useEffect(() => {
        axios.get('https://api.jetpatient.dev/api/proceduretypes/?format=json')
            .then(response => {
                setProcedureCat(response.data.results);
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



    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };
    const itemsPerPage = 3;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentData = data.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div>
            <div className='container my-[50px] '>
                <ClinicSearch />
                <CategoryHeader />
                {
                    loading ? <><Loader /></> :

                        <div className="grid lg:grid-cols-3 grid-cols-1 gap-[60px] my-[32px] mx-[20px]">
                            {
                                procedureCat.map((procedure: any) => (
                                    <>
                                        <CategoriesCard procedure={procedure} />

                                    </>
                                ))
                            }
                        </div>
                }
                <div className='h-[3px] mx-[20px] bg-[#1e1f26]'></div>
                <h2 className='text-[24px] text-[#1e1f26] leading-[36px] font-semibold mx-[20px] mt-5 '>Popular Procedures</h2>

                {loading ? (
                    <Loader />
                ) : (
                    <>
                        <div className="grid lg:grid-cols-3 gap-x-[63px] gap-y-[20px] mb-[50px] grid-cols-1 mt-[30px] mx-[20px]">
                            {currentData.map((procedure: any) => (
                                <ProcedureCard key={procedure.id} procedure={procedure} />
                            ))}
                        </div>
                        <Pagination
                            totalItems={data.length}
                            itemsPerPage={itemsPerPage}
                            currentPage={currentPage}
                            onPageChange={handlePageChange}
                        />
                    </>
                )}
            </div>
        </div>
    )
}

export default ProcedureCategories