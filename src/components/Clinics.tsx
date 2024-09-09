'use client'

import React, { useState } from 'react'
import c1 from '@/assets/c1.png'
import c2 from '@/assets/c2.png'
import c3 from '@/assets/c3.jpeg'
import c4 from '@/assets/c4.png'
import c5 from '@/assets/c5.png'
import rightarrow from '@/assets/rightarrow.png'
import Image from 'next/image'
import { DataInterface } from '@/global/types'
import Slider from "react-slick";

const data: DataInterface[] = [
    {
        id: 1,
        image: c1,
        name: "Mexico City, Mexico",
        rating: 9.6,
        services: "Cosmetics, Cardiology, Stem-Cells",
        discount: "30% - 60%",
    },
    {
        id: 2,
        image: c2,
        name: "Mumbai, India",
        rating: 9.6,
        services: "Orthopedics, Fertility, Dentistry",
        discount: "30% - 60%",
    },
    {
        id: 3,
        image: c3,
        name: "Istanbul, Turkey",
        rating: 9.8,
        services: "Hair Transplants",
        discount: "40% - 70%",
    },
    {
        id: 4,
        image: c4,
        name: "Bangkok, Thailand",
        rating: 9.5,
        services: "Orthopedics , Cancer , Cosmetics",
        discount: "50% - 75%",
    },
    {
        id: 5,
        image: c5,
        name: "Dubai, UAE",
        rating: 9.5,
        services: "UAE / Dubai",
        discount: "40% - 65%",
    }
]

function FavouriteButton() {
    const [favourite, setFavorite] = React.useState(false);

    const handleFavcorite = () => {
        console.log('handleFavcorite');
        setFavorite(!favourite);
    };

    return (
        <>
            <svg
                className={`heart-icon ${favourite ? 'favorited' : ''}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="50px"
                height="50px"
                onClick={handleFavcorite}
            >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
        </>
    );
}
const Clinics = () => {


    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (

        <div className='container mb-[50px] clinic_card '>
            <p className='text-[20px] font-poppins text-[#1e1f26] font-medium leading-[30px] mb-4 lg:mx-0 mx-4'>Highlighted Locations</p>
            <>
                <Slider {...settings}>
                    {data.map((values: any, index: number) => (
                        <React.Fragment key={index}>
                            <div key={values} className='slide-container'>
                                <div className='rounded-[16px]  bg-[#FFFFFF] shadow-card pb-4 me-[12px] mb-3'>
                                    <div className='relative p-2'>
                                        <div className='h-[184px] w-full overflow-hidden rounded-[24px]'>
                                            <Image className='h-full w-full   transform transition duration-500 hover:scale-110' src={values.image} alt="" />
                                        </div>
                                        <div className='absolute top-2 left-2'>
                                            <div className="flex justify-between">
                                                <div className='ms-2 mt-2 w-[42px] h-[26px] bg-[#032D4B] text-white text-[12px] rounded-[100px] flex justify-center items-center font-prompt  '>
                                                    <p>{values.rating}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='absolute top-2 right-2'>
                                            <div className="flex justify-between">
                                                <div className='mt-2 me-2 w-[24px] h-[24px] bg-[#FFFFFF80] text-white text-[12px] rounded-[100px] flex justify-center items-center font-prompt  '>
                                                    <FavouriteButton />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='ps-[12px] pe-2'>
                                        <h4 className='text-base  text-[#1e1f26] font-prompt cursor-pointer  '>{values.name}</h4>
                                        <p className='text-sm  text-[#707071] prompt-light mb-2'>{values.services}</p>
                                    </div>
                                    <div className="flex items-center justify-between px-[12px]">
                                        <p className='text-base  text-[#1e1f26] prompt-semibold'>Save {values.discount}</p>
                                        <button>
                                            <Image height={14} width={14} src={rightarrow} alt="" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </React.Fragment>

                    ))}

                </Slider>
            </>
        </div>
    )
}

export default Clinics

