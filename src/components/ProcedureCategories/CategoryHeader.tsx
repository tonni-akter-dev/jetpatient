import React from 'react'
import list from '../../assets/list.svg';
import filter from '../../assets/filter.svg';

import Image from 'next/image';
import { FiAlertCircle } from 'react-icons/fi';


const CategoryHeader = () => {
    return (
        <div className='mt-[33px] m-[20px]'>
            <div className="flex lg:flex-row flex-col justify-between items-center">
                <div className='flex items-center font-semibold gap-1 text-[24px] leading-[36px] '>Procedure Categories
                    <div className="relative group">
                        <FiAlertCircle style={{ color: "#707071", height: "21px", width: "23px" }} />
                        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 w-max px-2 py-1 bg-gray-700 text-white text-sm rounded opacity-0 cursor-pointer group-hover:opacity-100 transition-opacity duration-300">
                            Tooltip text goes here
                        </div>
                    </div>
                </div>
                <div className='flex flex-wrap gap-6 items-center lg:mt-0 mt-5'>
                    <button className='lg:w-[128px] w-full bg-[#0ACAFF] leading-[18px]  flex justify-center items-center gap-2 text-black font-prompt text-sm  h-[38px] outline-none rounded-[100px] '><Image width={24} height={24} src={list} alt="list" /> My Lists</button>
                    <button className='lg:w-[128px] w-full bg-[#03ffff] leading-[18px]  flex justify-center items-center gap-2 text-black font-prompt text-sm  h-[38px] outline-none rounded-[100px] '><Image width={24} height={24} src={filter} alt="list" /> My Filters</button>

                    <div className="sort_by_select lg:w-fit w-full ">
                        <select className=" rounded-[100px]  border border-[#cfcfd0] text-primary h-[36px] lg:w-[128px] w-full px-2 focus:outline-red focus:border-[#cfcfd0] ">
                            <option value="">  Sort by</option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CategoryHeader