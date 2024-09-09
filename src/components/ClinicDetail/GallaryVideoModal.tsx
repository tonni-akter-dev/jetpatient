'use client'

import Image from 'next/image';
import React, { useRef } from 'react'
import gallary2 from '@/assets/gallary2.png';
import play from '@/assets/play_circle.svg';


const GallaryVideoModal = () => {

    const videoRef2 = useRef<HTMLVideoElement>(null);

    const handlePlayClick2 = () => {
        if (videoRef2.current) {
            videoRef2.current.play();
        }
    };
    const handleModalClose2 = () => {
        if (videoRef2.current) {
            videoRef2.current.pause();
            videoRef2.current.currentTime = 0;
        }
    };


    return (
        <div>
            <div className="relative mb-4">
                <Image className='w-[95%] h-[168px]' src={gallary2} alt="back" />
                <button className="btn absolute bottom-[15px] right-[-7px] border-0" onClick={() => {
                    const modalElement = document.getElementById('my_modal_3');
                    if (modalElement) {
                        const dialogElement = modalElement as HTMLDialogElement;
                        dialogElement.showModal();
                    } else {
                        console.error('Modal element not found');
                    }
                }}>
                    <Image className='w-[81px] h-[57px]' src={play} alt="back" />
                </button>

                <dialog id="my_modal_3" className="modal z-50" onClose={handleModalClose2}>
                    <div className="modal-box p-0">
                        <div className='relative'>
                            <video ref={videoRef2} width="100%" height="100%" autoPlay={false} loop={true} controls>
                                <source src="/song2.mp4" type="video/mp4" />
                            </video>
                            <div className='absolute right-[10px] bottom-[10px] cursor-pointer' onClick={handlePlayClick2}>
                                <Image className='w-[80px] h-[80px]' src={play} alt="" />
                            </div>
                        </div>
                    </div>
                    <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                    </form>
                </dialog>

            </div>

        </div>
    )
}

export default GallaryVideoModal