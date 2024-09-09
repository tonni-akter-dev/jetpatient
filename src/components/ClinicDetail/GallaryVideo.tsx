'use client'

import Image from 'next/image';
import React, { useRef } from 'react'
import gallary2 from '@/assets/gallary2.png';
import play from '@/assets/play_circle.svg';


const GallaryVideo = () => {

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
        <>
            <div className="relative mt-[20px]">

                <div className='overflow-hidden w-[317px] h-[168px] rounded-[24px]'>
                    {/* <Image className='  w-full  h-full transform transition duration-500 hover:scale-110' width={0} height={168} src={gallary5} alt="back" /> */}
                    <Image width={317} height={168} className="transform transition duration-500 hover:scale-110 w-full h-full " src={gallary2} alt="back" />
                </div>

                <button className="btn absolute left-[230px]
    bottom-[15px] border-0" onClick={() => {
                        const modalElement = document.getElementById('my_modal_3');
                        if (modalElement) {
                            const dialogElement = modalElement as HTMLDialogElement;
                            dialogElement.showModal();
                        } else {
                            console.error('Modal element not found');
                        }
                    }}>
                    <Image width={81} height={57} className='w-[81px] h-[57px]' src={play} alt="back" />
                </button>

                <dialog id="my_modal_3" className="modal z-50" onClose={handleModalClose2}>
                    <div className="modal-box p-0">
                        <div className='relative'>
                            <video ref={videoRef2} width="100%" height="100%" autoPlay={false} loop={true} controls>
                                <source src="/song2.mp4" type="video/mp4" />
                            </video>
                            <div className='absolute right-[10px] bottom-[10px] cursor-pointer' onClick={handlePlayClick2}>
                                <Image width={80} height={80} className='w-[80px] h-[80px]' src={play} alt="" />
                            </div>
                        </div>
                    </div>
                    <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                    </form>
                </dialog>

            </div>

        </>
    )
}

export default GallaryVideo