import React from 'react'

const ReviewProgress = ({ value, maxValue = 10, title }: any) => {
    const percentage = (value / maxValue) * 100;
    const inactivePercentage = 100 - percentage;

    // Define the linear gradient background
    const gradientBackground = `linear-gradient(to right, #032d4b ${percentage}%, #f0f0f0 ${percentage}% ${inactivePercentage}%)`;

    return (
        <>
            <div className='flex justify-between items-center mb-1'>
                <p className='prompt-light text-[12px] text-primary'>{title}</p>
                <div className="prompt-light text-[12px] rounded-[100px]     text-[#707071]">{`${value}/${maxValue}`}</div>
            </div>
            <div className="w-full h-2 rounded-[100px] mb-5" style={{ background: gradientBackground }}>
            </div>
        </>
    )
}

export default ReviewProgress