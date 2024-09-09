'use client'
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker'
const Calender = ({ selectedDay, setSelectedDay }:any) => {
    const [activeIndex, setActiveIndex] = useState(0); 

    const handleButtonClick = (index: number) => {
        setActiveIndex(index);
    };

    return (
        <div className='bg-white rounded-[26px] border border-[#505050] w-fit  p-[30px] justify-center absolute z-40 '>
            <div className='flex justify-center mb-[40px]'>
                <div className='bg-[rgba(0,0,0,0.1)] p-[6px] rounded-[26px] flex gap-[14px] w-fit justify-center'>
                    <button onClick={() => handleButtonClick(0)} className={`text-primary text-[12px] prompt-medium ${activeIndex === 0 ? "bg-white w-[94px] h-[28px] rounded-[16px]" : "w-[94px] h-[28px]"}`}>Dates</button>
                    <button onClick={() => handleButtonClick(1)} className={`text-primary text-[12px] prompt-medium ${activeIndex === 1 ? "bg-white w-[94px] h-[28px] rounded-[16px]" : "w-[94px] h-[28px]"}`}>Months</button>
                    <button onClick={() => handleButtonClick(2)} className={`text-primary text-[12px] prompt-medium ${activeIndex === 2 ? "bg-white w-[94px] h-[28px] rounded-[16px]" : "w-[94px] h-[28px]"}`}>Flexible</button>
                </div>
            </div>
            <DayPicker
                mode="single"
                selected={selectedDay}
                onSelect={setSelectedDay}
                numberOfMonths={2}
            />

            <div className='flex gap-[20px] justify-center '>
                <button className='border border-[#020202]  text-primary text-[12px] prompt-medium w-[88px] h-[28px] rounded-[16px] '>Exact Dates</button>
                <button className='border border-[#020202]  text-primary text-[12px] prompt-medium w-[88px] h-[28px] rounded-[16px] '>± 1 week</button>
                <button className='border border-[#020202]  text-primary text-[12px] prompt-medium w-[88px] h-[28px] rounded-[16px] '>± 2 weeks</button>
                <button className='border border-[#020202]  text-primary text-[12px] prompt-medium w-[88px] h-[28px] rounded-[16px] '>± 1 month</button>
            </div>
        </div>
    )
}

export default Calender