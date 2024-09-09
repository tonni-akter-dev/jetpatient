'use client'

import Image from 'next/image';
import React from 'react'
import Slider from 'react-slick';
import gallary1 from "../../assets/gallary3.png"
import gallary2 from "../../assets/gallary4.png"
import gallary3 from "../../assets/gallary7.png"
import gallary4 from "../../assets/gallary8.png"
import forward from "../../assets/forward.png"
import backward from "../../assets/backward.png"

const NextArrow = ({ onClick }: any) => (
    <button className='absolute right-[-10px] top-[37%]' onClick={onClick}>
        <Image width={40} height={40} src={forward} alt="" />
    </button>
);

const PrevArrow = ({ onClick }: any) => (
    <button className='absolute left-[-1%] top-[37%]' onClick={onClick}>
        <Image width={40} height={40} src={backward} alt="" />
    </button>
);

const GallarySlider = () => {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,

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
        <div className='gallary_slide'>

            <div className="slider-container">
                <Slider {...settings}>
                    <div className="w-[280px] mr-[20px] h-[168px] overflow-hidden ">
                        <Image width={280} height={168} className="w-full  h-full transform transition duration-500 hover:scale-110" src={gallary1} alt="" />
                    </div>

                    <div className="w-[280px] mr-[20px] h-[168px] overflow-hidden ">
                        <Image width={280} height={168} className="w-full  h-full transform transition duration-500 hover:scale-110" src={gallary2} alt="" />
                    </div>
                    <div className="w-[280px] mr-[20px] h-[168px] overflow-hidden ">

                        <Image width={280} height={168} className="w-full  h-full transform transition duration-500 hover:scale-110" src={gallary3} alt="" />
                    </div>
                    <div className="w-[280px] mr-[20px] h-[168px] overflow-hidden ">

                        <Image width={280} height={168} className="w-full  h-full transform transition duration-500 hover:scale-110" src={gallary4} alt="" />
                    </div>

                    <div className="w-[280px] mr-[20px] h-[168px] overflow-hidden ">
                        <Image width={280} height={168} className="w-full  h-full transform transition duration-500 hover:scale-110" src={gallary1} alt="" />
                    </div>
                    <div className="w-[280px] mr-[20px] h-[168px] overflow-hidden ">

                        <Image width={280} height={168} className="w-full  h-full transform transition duration-500 hover:scale-110" src={gallary2} alt="" />
                    </div>
                    <div className="w-[280px] mr-[20px] h-[168px] overflow-hidden ">

                        <Image width={280} height={168} className="w-full  h-full transform transition duration-500 hover:scale-110" src={gallary3} alt="" />
                    </div>
                    <div className="w-[280px] mr-[20px] h-[168px] overflow-hidden ">

                        <Image width={280} height={168} className="w-full  h-full transform transition duration-500 hover:scale-110" src={gallary4} alt="" />
                    </div>
                    <div className="w-[280px] mr-[20px] h-[168px] overflow-hidden ">
                        <Image width={280} height={168} className="w-full  h-full transform transition duration-500 hover:scale-110" src={gallary1} alt="" />
                    </div>
                    <div className="w-[280px] mr-[20px] h-[168px] overflow-hidden ">

                        <Image width={280} height={168} className="w-full  h-full transform transition duration-500 hover:scale-110" src={gallary2} alt="" />
                    </div>
                    <div className="w-[280px] mr-[20px] h-[168px] overflow-hidden ">

                        <Image width={280} height={168} className="w-full  h-full transform transition duration-500 hover:scale-110" src={gallary3} alt="" />
                    </div>
                    <div className="w-[280px] mr-[20px] h-[168px] overflow-hidden ">

                        <Image width={280} height={168} className="w-full  h-full transform transition duration-500 hover:scale-110" src={gallary4} alt="" />
                    </div>
                    <div className="w-[280px] mr-[20px] h-[168px] overflow-hidden ">
                        <Image width={280} height={168} className="w-full  h-full transform transition duration-500 hover:scale-110" src={gallary1} alt="" />
                    </div>
                    <div className="w-[280px] mr-[20px] h-[168px] overflow-hidden ">

                        <Image width={280} height={168} className="w-full  h-full transform transition duration-500 hover:scale-110" src={gallary2} alt="" />
                    </div>
                    <div className="w-[280px] mr-[20px] h-[168px] overflow-hidden ">

                        <Image width={280} height={168} className="w-full  h-full transform transition duration-500 hover:scale-110" src={gallary3} alt="" />
                    </div>
                    <div className="w-[280px] mr-[20px] h-[168px] overflow-hidden ">

                        <Image width={280} height={168} className="w-full  h-full transform transition duration-500 hover:scale-110" src={gallary4} alt="" />
                    </div>
                    <div className="w-[280px] mr-[20px] h-[168px] overflow-hidden ">
                        <Image width={280} height={168} className="w-full  h-full transform transition duration-500 hover:scale-110" src={gallary1} alt="" />
                    </div>
                    <div className="w-[280px] mr-[20px] h-[168px] overflow-hidden ">

                        <Image width={280} height={168} className="w-full  h-full transform transition duration-500 hover:scale-110" src={gallary2} alt="" />
                    </div>
                    <div className="w-[280px] mr-[20px] h-[168px] overflow-hidden ">

                        <Image width={280} height={168} className="w-full  h-full transform transition duration-500 hover:scale-110" src={gallary3} alt="" />
                    </div>
                    <div className="w-[280px] mr-[20px] h-[168px] overflow-hidden ">

                        <Image width={280} height={168} className="w-full  h-full transform transition duration-500 hover:scale-110" src={gallary4} alt="" />
                    </div>
                    <div className="w-[280px] mr-[20px] h-[168px] overflow-hidden ">
                        <Image width={280} height={168} className="w-full  h-full transform transition duration-500 hover:scale-110" src={gallary1} alt="" />
                    </div>
                    <div className="w-[280px] mr-[20px] h-[168px] overflow-hidden">

                        <Image width={280} height={168} className="w-full  h-full transform transition duration-500 hover:scale-110" src={gallary2} alt="" />
                    </div>
                    <div className="w-[280px] mr-[20px] h-[168px] overflow-hidden">

                        <Image width={280} height={168} className="w-full  h-full transform transition duration-500 hover:scale-110" src={gallary3} alt="" />
                    </div>
                    <div className="w-[280px] mr-[20px] h-[168px] overflow-hidden">
                        <Image width={280} height={168} className="w-full  h-full transform transition duration-500 hover:scale-110" src={gallary4} alt="" />
                    </div>

                </Slider>
            </div>
        </div>
    )
}

export default GallarySlider