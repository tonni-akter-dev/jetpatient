'use client'
import back from '@/assets/back.png'
import s1 from '@/assets/s1.png'
import s2 from '@/assets/s2.png'
import s3 from '@/assets/s3.png'
import s4 from '@/assets/s4.png'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { format } from 'date-fns'
import ProcedureModal from '../ProcedureModal'
import Calender from '../Calender'
import CountrySelect from '../CountrySelect'

const SearchForms = () => {

    const [calender, setCalender] = useState(false);
    const [procedure, setProcedure] = useState(false);
    const [country, setCountry] = useState(false);
    const [selectedDay, setSelectedDay] = useState<Date>();
    const calenderRef = useRef<HTMLDivElement | null>(null);
    const procedureRef = useRef<HTMLDivElement | null>(null);
    const countryRef = useRef<HTMLDivElement | null>(null);

    // Function to handle button clicks
    const handleCalender = () => {
        setCalender(!calender);
        setCountry(false)
        setProcedure(false);
    };
    const handleProcedure = () => {
        setProcedure(!procedure);
        setCalender(false);
        setCountry(false)
    };
    const handleCountry = () => {
        setCountry(!country);
        setProcedure(false);
        setCalender(false);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (calenderRef.current && !calenderRef.current.contains(event.target as Node)) {
            setCalender(false);
        }
        if (procedureRef.current && !procedureRef.current.contains(event.target as Node)) {
            setProcedure(false);
        }
        if (countryRef.current && !countryRef.current.contains(event.target as Node)) {
            setCountry(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);


    const [countryName, setCountryName] = useState("");

    const handleCountryClick = (countryName: string) => {
        console.log(countryName);
        setCountryName(countryName);
    };
    return (
        <>
            <div className='bg-[#F2FFFF] pt-[24px]  pe-[49px] pb-[46px] ps-[63px]'>
                <div className='mb-[18px]'>
                    <Link href="/"><Image height={20} width={20} src={back} alt="back" /></Link>
                </div>
                <div>
                    <h3 className='text-[#1e1f26] text-[20px] prompt-medium leading-[30px] mb-4 '>Your search</h3>
                    <div>
                        <label className='text-[#1e1f26] text-sm prompt-regular '>Procedure</label>
                        <div className='relative'>
                            <input onClick={handleProcedure} style={{ border: '1px solid #03ffff' }} className='input_search mb-4' type="text" placeholder='Cosmetic Dentistry' />

                            {procedure && (
                                <div ref={procedureRef}>
                                    <ProcedureModal />
                                </div>
                            )}
                            <div className='absolute top-[13px] left-[12px]'>
                                <Image  height={24} width={23}  src={s1} alt="" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <label className='text-[#1e1f26] text-sm prompt-regular '>Desired Date</label>
                        <div className='relative'>
                            <input value={selectedDay ? format(selectedDay, 'PPP') : ''} onClick={handleCalender} className='input_search mb-4' type="text" placeholder='Week of Jan 22nd, 2024' />

                            {calender && (
                                <div ref={calenderRef}>
                                    <Calender selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
                                </div>
                            )}
                            <div className='absolute top-[16px] left-[16px]'>
                                <Image width={16} height={16} src={s2} alt="" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <label className='text-[#1e1f26] text-sm prompt-regular '>Departing City</label>
                        <div className='relative'>
                            <input onClick={handleCountry}
                                value={countryName ? countryName : ""} className='input_search mb-4' type="text" placeholder='U.S. - California' />

                            {country && (
                                <div ref={countryRef}>
                                          <CountrySelect handleCountryClick={handleCountryClick} />
                                </div>
                            )}
                            <div className='absolute top-[16px] left-[16px]'>
                                <Image width={16} height={16} src={s3} alt="" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <label className='text-[#1e1f26] text-sm prompt-regular '>Destination Preference</label>
                        <div className='relative'>
                            <input className='input_search mb-[24px]' type="text" placeholder='No Preference' />
                            <div className='absolute top-[16px] left-[16px]'>
                                <Image width={16} height={16} src={s4} alt="" />
                            </div>
                        </div>
                    </div>

                    {/* button search */}
                    <div>
                        <button className='h-[42px] rounded-[100px] bg-[#1e1f26] text-white prompt-regular  
                                text-sm w-full'>Search</button>
                    </div>


                </div>

            </div>
        </>
    )
}

export default SearchForms