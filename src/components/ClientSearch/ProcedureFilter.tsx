'use client'

import React, { useState } from 'react'
import moretime from '@/assets/more_time.svg'
import Image from 'next/image'



const ProcedureFilter = () => {

    const [checkedStates, setCheckedStates] = useState<any>({});
    const toggleCheckbox = (optionId: any) => {
        setCheckedStates((prevStates: any) => ({
            ...prevStates,
            [optionId]: !prevStates[optionId],
        }));
    };

    return (
        <>
            <div className='pt-[29px] bg-[#f0f0f0]  ps-[43px] pb-[48px]'>

                <div>
                    <h3 className='text-[20px] prompt-medium text-primary mb-4 '>Procedure Specific Filters</h3>
                    <ul className='ps-[18px]'>
                        {[
                            { id: 1, text: 'Option 1' },
                            { id: 2, text: 'Option 2' },
                            { id: 3, text: 'Option 3' },
                            { id: 4, text: 'Option 4' },
                        ].map(option => (
                            <li key={option.id} className='flex gap-[12px] mb-[12px]'>
                                <input
                                    type="checkbox"
                                    checked={checkedStates[option.id] || false}
                                    onChange={() => { }}
                                    name=""
                                    id=""
                                />
                                <p
                                    onClick={() => toggleCheckbox(option.id)}
                                    className='text-primary text-sm prompt-light cursor-pointer'
                                >
                                    {option.text}
                                </p>
                            </li>
                        ))}

                    </ul>
                </div>
                <div className='mb-[23px]'>
                    <h3 className='text-[20px] prompt-medium text-primary mb-4'>Languages Spoken (English Default)</h3>
                    <ul className='ps-[18px]'>
                        {[
                            { id: 5, text: 'Spanish' },
                            { id: 6, text: 'Mandarin' },
                            { id: 7, text: 'German' },
                            { id: 8, text: 'French' },
                        ].map(option => (
                            <li key={option.id} className='flex gap-[12px] mb-[12px]'>
                                <input
                                    type="checkbox"
                                    checked={checkedStates[option.id] || false}
                                    onChange={() => { }}
                                    name=""
                                    id=""
                                />
                                <p
                                    onClick={() => toggleCheckbox(option.id)}
                                    className='text-primary text-sm prompt-light cursor-pointer'
                                >
                                    {option.text}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='mb-[23px]'>
                    <h3 className='text-[20px] prompt-medium text-primary mb-4 '>Certifications | Awards</h3>
                    <ul className='ps-[18px]'>
                        {[
                            { id: 9, text: 'ISAPS' },
                            { id: 10, text: 'JCI' },
                            { id: 11, text: 'MTA' },
                            { id: 12, text: 'IBMS' },
                        ].map(option => (
                            <li key={option.id} className='flex gap-[12px] mb-[12px]'>
                                <input
                                    type="checkbox"
                                    checked={checkedStates[option.id] || false}
                                    onChange={() => { }}
                                    name=""
                                    id=""
                                />
                                <p
                                    onClick={() => toggleCheckbox(option.id)}
                                    className='text-primary text-sm prompt-light cursor-pointer'
                                >
                                    {option.text}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className='mb-[23px]'>
                    <h3 className='text-[20px] prompt-medium text-primary mb-4 flex gap-1 items-center'>Flight Radius
                        <Image height={38} width={24} src={moretime} alt="moretime" />
                    </h3>
                    <div className='flex gap-1'>
                        {[
                            { id: 1, text: '1h - 3h' },
                            { id: 2, text: '3h - 5h' },
                            { id: 3, text: '5h - 7h' },
                            { id: 4, text: 'Anywhere' },
                        ].map(option => (
                            <button
                                key={option.id}
                                className='border border-[#707071] rounded-[100px] text-sm prompt-regular h-[30px] px-[10px]'
                            >
                                {option.text}
                            </button>
                        ))}

                    </div>

                </div>

            </div>

        </>
    )
}

export default ProcedureFilter