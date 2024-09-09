'use client'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import rightArrow from '@/assets/right-arrow.png'
import ProcedureModal from '../ProcedureModal'
import CountrySelect from '../CountrySelect'
import Link from 'next/link'
import CareTypeModal from './CareTypeModal'
import { useSelectedProcedure } from '@/context/ProcedureContext'
import DestinationSelec from '../DestinationSelec'


const ClinicSearch = () => {

    const { selectedProcedure, setSelectedProcedure } = useSelectedProcedure();

    const [procedure, setProcedure] = useState(false);
    const [region, setRegion] = useState(false);
    const procedureRef = useRef<HTMLDivElement | null>(null);

    const handleProcedure = (e: React.MouseEvent) => {
        e.stopPropagation();
        setProcedure(prev => !prev);
        setRegion(false);
    };

    const handleRegion = () => {
        setRegion(prev => !prev);
        setProcedure(false);
    };

    const [regionName, setRegionName] = useState("");


    const [countryName, setCountryName] = useState("");

    const handleCountryClick = (countryName: string) => {
        setCountryName(countryName);
    };


    const [procedureName, setProcedureName] = useState('What are you looking for?');

    const handleProcedureClick = (name: any, id: any) => {
        setProcedureName(name)
        setSelectedProcedure({ name, id })
    };

    // useEffect(() => {
    //     const handleClickOutside = (event: MouseEvent) => {
    //         if (procedureRef.current && !procedureRef.current.contains(event.target as Node)) {
    //             setProcedure(false);
    //         }
    //     };

    //     document.addEventListener('mousedown', handleClickOutside);
    //     return () => {
    //         document.removeEventListener('mousedown', handleClickOutside);
    //     };
    // }, []);


    return (
        <div>
            <div className='py-[16px] ps-[48px] lg:h-[80px] pe-[16px] bg-[#ffffff] shadow-searchResults lg:rounded-[100px] lg:w-fit mx-auto'>
                <div className='flex lg:flex-row flex-col lg:gap-0 gap-4 items-start
                mx-auto '>
                    <div>
                        <div className='lg:mr-[20px]'>
                            <h5 className='text-[#1e1f26] text-[14px] prompt-medium leading-[22px]'>Care Type</h5>
                            <CareTypeModal setProcedure={setProcedure} />
                        </div>
                    </div>

                    <div className='divider_design'></div>

                    <div className='lg:mr-[20px] lg:ms-[24px]'>
                        <h5 className=' text-[#1e1f26] text-[14px] prompt-medium leading-[22px] '>Procedure</h5>
                        <p onClick={handleProcedure} className=' text-[#707071] text-[14px] prompt-light leading-[22px] mt-1 cursor-pointer'>{procedureName}</p>

                        {procedure && (
                            <div ref={procedureRef}>
                                <ProcedureModal handleProcedureClick={handleProcedureClick} />
                            </div>
                        )}
                    </div>
                    <div className='divider_design'></div>
                    <div className='lg:ms-[24px] lg:mr-[20px]'>
                        <h5 className=' text-[#1e1f26] text-[14px] prompt-medium leading-[22px] '>Departing Country</h5>
                        <CountrySelect handleCountryClick={handleCountryClick} />
                    </div>

                    <div className='divider_design'></div>

                    <div className='lg:ms-[24px] lg:mr-[10px]'>
                        <h5 className=' text-[#1e1f26] text-[14px] prompt-medium leading-[22px] '>Destination Preference</h5>
                        <p className=' text-[#707071] text-[14px] prompt-light leading-[22px] mt-1 cursor-pointer' onClick={handleRegion}>{regionName ? regionName : "OPTIONAL"}</p>
                        {region && (
                            <div>
                                <DestinationSelec />
                            </div>
                        )}
                    </div>

                    <Link href='/clinics'>
                        <button >
                            <Image width={56}
                                height={56} src={rightArrow} alt="rightArrow" />
                        </button>
                    </Link>

                </div>
            </div >
        </div >
    )
}

export default ClinicSearch