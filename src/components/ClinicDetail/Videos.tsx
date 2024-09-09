'use client'
import play from '@/assets/play_circle.svg';
import Image from 'next/image'
import React, { useRef } from 'react'
import gallary2 from '@/assets/gallary6.png';
import GallaryVideo from './GallaryVideo';


const Videos = ({clinicResults}:any) => {

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

  return (
    <div className=' mb-[28px]'>

      <div className='relative mt-[15px]'>

        <div className='overflow-hidden w-full h-[475] rounded-[24px]'>
          {/* <Image className='  w-full  h-full transform transition duration-500 hover:scale-110' width={0} height={168} src={gallary5} alt="back" /> */}
          <Image width={0} className='w-full transform transition duration-500 hover:scale-110' height={475} src={gallary2} alt="back" />
        </div>




        <button className="btn absolute bottom-[20px] right-[-5px] border-0" onClick={() => {
          const modalElement = document.getElementById('my_modal');
          if (modalElement) {
            const dialogElement = modalElement as HTMLDialogElement;
            dialogElement.showModal();
          } else {
            console.error('Modal element not found');
          }
        }}>

          <Image width={81} height={57} className='w-[81px] h-[57px]' src={play} alt="back" />
        </button>

        <dialog id="my_modal" className="modal z-50" onClose={handleModalClose}>
          <div className="modal-box p-0">
            <div className='relative'>
              <video ref={videoRef} width="100%" height="100%" autoPlay={false} loop={true} controls>
                <source src="/song2.mp4" type="video/mp4" />
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



      <GallaryVideo />





    </div>

  )
}

export default Videos