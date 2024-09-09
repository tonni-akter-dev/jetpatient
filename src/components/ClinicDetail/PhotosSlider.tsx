import React, { useRef, useState } from 'react';
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import sliderImage from '../../assets/sliderimg.png';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';

export default function PhotosSlider() {
    const [swiperRef, setSwiperRef] = useState<any>(null);
    const [slides, setSlides] = useState(
        Array.from({ length: 24 }).map((_, index) => `Slide ${index + 1}`)
    );

    return (
        <>
            <Swiper
                modules={[Virtual, Navigation, Pagination]}
                onSwiper={setSwiperRef}
                slidesPerView={1}
                centeredSlides={true}
                pagination={{
                    type: 'fraction',
                }}
                navigation={false}
                virtual
            >
                {slides.map((slideContent, index) => (
                    <SwiperSlide key={slideContent} virtualIndex={index}>
                        <Image height={480} width={1313} className='rounded-[16px]' src={sliderImage} alt="" />
                    </SwiperSlide>
                ))}

            </Swiper>


        </>
    );
}
