'use client'
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import back from '@/assets/back.png';
import gallary1 from '@/assets/gallary1.png';
import gallary2 from '@/assets/gallary2.png';
import gallary3 from '@/assets/gallary3.png';
import gallary4 from '@/assets/gallary4.png';
import gallary5 from '@/assets/gallary5.png';
import play from '@/assets/play_circle.svg';
import Slider from "react-slick";
import GallaryVideoModal from './GallaryVideoModal';
import Link from 'next/link';

const ClinicGallary = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2
    };
    const videoRef = useRef<HTMLVideoElement>(null);

    const handlePlayClick = () => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    const handleModalClose = () => {
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    };

    const handleBack = () => {
        window.history.back()
    }


    return (
        <div className='container'>
            <div className='my-[24px] '>
                <button onClick={handleBack}> <Image height={20} width={20} src={back} alt="back" /></button>
            </div>

            <div className="grid grid-cols-12 gap-4 mb-[24px]">

                <div className="col-span-6">

                    <div className="relative overflow-hidden w-full  rounded-[24px]">

                        <Image className='transform transition duration-500 h-[352px] hover:scale-110 ' width={0}
                            style={{ width: '100%' }} height={352} src={gallary1} alt="back" />

                        <button className="btn absolute bottom-[40px] right-[0px] border-0"
                            onClick={() => {
                                const modalElement = document.getElementById('my_modal_2');
                                if (modalElement) {
                                    const dialogElement = modalElement as HTMLDialogElement;
                                    dialogElement.showModal();

                                } else {
                                    console.error('Modal element not found');
                                }
                            }}>
                            <Image width={85} height={79} className='w-[85px] h-[79px]' src={play} alt="back" />
                        </button>
                        <dialog id="my_modal_2" className="modal z-50" onClose={handleModalClose}>
                            <div className="modal-box p-0">
                                <div className='relative'>
                                    <video ref={videoRef} width="100%" height="100%" autoPlay={false} loop={true} controls>
                                        <source src="/song.mp4" type="video/mp4" />
                                    </video>
                                    <div className='absolute right-[10px] bottom-[10px] cursor-pointer' onClick={handlePlayClick}>
                                        <Image width={80} height={80} className='w-[80px] h-[80px]' src={play} alt="" />
                                    </div>
                                </div>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>

                    </div>
                </div>


                <div className="col-span-6">
                    <div className="slider-container ">
                        <Slider {...settings} className='grid grid-cols-12 gap-4'>
                            <div className="col-span-6">
                                <GallaryVideoModal />
                                <div className='relative overflow-hidden w-[95%] h-[168px] rounded-[24px]'>
                                    <Image className=' transform transition  w-full h-full duration-500 hover:scale-110' width={0} height={168} src={gallary3} alt="back" />
                                </div>
                            </div>
                            <div className="col-span-6">
                                <div className='overflow-hidden w-full  h-[168px] rounded-[24px] mb-4'>
                                    <Image width={0} height={168} className='  w-full h-full transform transition duration-500 hover:scale-110  ' src={gallary4} alt="back" />
                                </div>

                                <div className='overflow-hidden w-full h-[168px] rounded-[24px]'>
                                    <Image className='  w-full  h-full transform transition duration-500 hover:scale-110' width={0} height={168} src={gallary5} alt="back" />
                                </div>
                            </div>
                            <div className="col-span-6">
                                <div className='overflow-hidden w-[95%] h-[168px] mb-4  rounded-[24px]'>
                                    <Image width={0} height={168} className='mb-4   w-full transform transition duration-500 hover:scale-110' src={gallary2} alt="back" />
                                </div>
                                <div className='overflow-hidden  w-[95%] h-[168px]  rounded-[24px]'>
                                    <Image className=' transform  w-full h-full transition duration-500 hover:scale-110' width={0} height={168} src={gallary3} alt="back" />
                                </div>
                            </div>
                            <div className="col-span-6">
                                <div className='overflow-hidden w-[95%] h-[168px] rounded-[24px] mb-4'>
                                    <Image width={0} height={168} className='w-full h-full transform transition duration-500 hover:scale-110 mb-4 ' src={gallary4} alt="back" />
                                </div>
                                <div className='overflow-hidden w-[95%] h-[168px] rounded-[24px]'>
                                    <Image className='w-full h-full  transform transition duration-500 hover:scale-110' width={0} height={168} src={gallary5} alt="back" />
                                </div>
                            </div>
                            <div className="col-span-6">
                                <div className='overflow-hidden w-[95%] h-[168px] mb-4  rounded-[24px]'>
                                    <Image width={0} height={168} className='mb-4   w-full transform transition duration-500 hover:scale-110' src={gallary2} alt="back" />
                                </div>
                                <div className='overflow-hidden  w-[95%] h-[168px]  rounded-[24px]'>
                                    <Image className=' transform  w-full h-full transition duration-500 hover:scale-110' width={0} height={168} src={gallary3} alt="back" />
                                </div>
                            </div>
                            <div className="col-span-6">
                                <div className='overflow-hidden w-[95%] h-[168px] rounded-[24px] mb-4'>
                                    <Image width={0} height={168} className='w-full h-full transform transition duration-500 hover:scale-110 mb-4 ' src={gallary4} alt="back" />
                                </div>
                                <div className='overflow-hidden w-[95%] h-[168px] rounded-[24px]'>
                                    <Image className='w-full h-full  transform transition duration-500 hover:scale-110' width={0} height={168} src={gallary5} alt="back" />
                                </div>
                            </div>

                        </Slider>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ClinicGallary