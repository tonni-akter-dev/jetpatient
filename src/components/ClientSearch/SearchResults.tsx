'use client'

import React, { useState } from 'react'
import result1 from '@/assets/result1.png';

import Image from 'next/image';
import { searchData } from '@/utils/searchResultApi';
import Pagination from '../Pagination';
import { FiAlertCircle } from 'react-icons/fi';

const SearchResults = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    const totalPages = Math.ceil(searchData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentPageData = searchData.slice(startIndex, endIndex);

    const handlePageChange = (page: any) => {
        setCurrentPage(page);
    };
    return (
        <>
            <div className='mt-[24px] flex justify-between items-center '>
                <div >
                    <p className='text-primary text-sm prompt-regular mb-1'>36 search results for</p>
                    <h2 className='text-primary text-2xl prompt-semibold mb-[30px]'>Cosmetic Dentistry, Jan 2024</h2>
                </div>

                <div className="sort_by_select">
                    <select className=" rounded-[100px]  border border-[#cfcfd0] text-primary h-[36px] w-[128px] px-2 focus:outline-red focus:border-[#cfcfd0] ">
                        <option value="">  Sort by</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>
                </div>

            </div>




            <div className=' gap[24px]'>
                {currentPageData.map(data => (
                    <>
                        <div className='bg-white shadow-searchResults rounded-[24px] p-4 mb-[24px]'>
                            <div className='flex justify-between'>
                                <div className='flex gap-4 result_details'>
                                    <Image height={200} width={200} src={result1} alt="result1" />
                                    <div>
                                        <div className='mb-4'>
                                            <h3 className='text-primary text-xl prompt-medium'>{data?.clinic_name}</h3>
                                            <p className='prompt-light'>{data?.clinic_location.city}, {data?.clinic_location.country}</p>
                                            <div className='flex gap-[12px] items-center'>
                                                <p className='prompt-light'>{data.cancelation_text[0]}</p>
                                                <p className='prompt-light'>{data.cancelation_text[1]}</p>
                                                <p className='prompt-light'>{data.cancelation_text[2]}</p>
                                            </div>
                                        </div>
                                        {/* second row */}
                                        <div className='mb-[12px]'>
                                            <h3 className='text-primary text-sm prompt-medium'>{data.clinic_one_liner}</h3>
                                            <p className='prompt-light'>{data.clinic_texts[0]} </p>
                                            <p className='prompt-light'>{data.clinic_texts[1]} </p>
                                        </div>
                                        <div className='flex gap-[11px]'>
                                            <button className='tag_button'># {data.clinic_tags[0]}</button>
                                            {data.clinic_tags[1] && <button className='tag_button'>#{data?.clinic_tags[1]}</button>}
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h3 className='text-primary text-base prompt-medium text-right  mb-2 '>Certifications / Awards</h3>
                                    <ul className='mb-[11px]'>
                                        {
                                            data.clinic_certifications.map(certification => (
                                                <>
                                                    <li className='flex items-center gap-2 text-[#000000] mb-[6px] text-sm justify-end text-right '>
                                                        {certification}
                                                        <div className=" flex flex-col justify-end">
                                                            <div className="relative">
                                                                <div className="group cursor-pointer relative inline-block  text-center">
                                                                    <FiAlertCircle style={{ color: "#707071", height: "16px", width: "16px" }} />
                                                                    <div className="opacity-0 bg-black text-white text-center text-xs rounded-lg py-2 absolute z-10 group-hover:opacity-100 bottom-full left-[-100px]  px-2 pointer-events-none">
                                                                        Tooltip message
                                                                        <svg className="absolute text-black h-2 w-full left-0 top-full" x="0px" y="0px" viewBox="0 0 255 255" ><polygon className="fill-current" points="0,0 127.5,127.5 255,0" /></svg>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </>
                                            ))
                                        }
                                    </ul>
                                    <div>
                                        <h3 className='text-primary text-[20px] prompt-semibold text-right  '>{data.price}</h3>
                                        <p className='text-[#000000] mb-[6px] text-sm  text-right mt-1'>{data.availability}</p>

                                        <div className='text-right mt-2'>

                                            <button className='bg-[#03ffff] text-sm text-[#000000] prompt-regular h-[34px] opacity-50 px-[20px]  rounded-[100px]  '>See booking options</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ))}
            </div>
            <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </>
    )
}

export default SearchResults