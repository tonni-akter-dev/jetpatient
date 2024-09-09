import React from 'react'
import watch from '@/assets/watch.png';
import monetization from '@/assets/monetization.png';
import publicimg from '@/assets/public.png';
import camera from '@/assets/videocamera.png';
import Image from 'next/image';


const ConsultationDetails = () => {
    return (
        <div className='mt-5 text-[12px] leading-4 text-[#000000] font-prompt '>
            <div className='flex items-center gap-2 mb-3'>
                <Image src={watch} alt="watch" />
                <p>15-30 min</p>
            </div>
            <div className='flex items-center gap-2 mb-3'>
                <Image src={camera} alt="watch" />
                <p>Video conferencing details provided upon confirmation</p>
            </div>
            <div className='flex items-center gap-2 mb-3'>
                <Image src={publicimg} alt="watch" />
                <p>All time windows are in your local time zone (PST)</p>
            </div>
            <div className='flex items-center gap-2 mb-3'>
                <Image src={monetization} alt="watch" />
                <p>This clinic offers free consultations</p>
            </div>


        </div>
    )
}

export default ConsultationDetails