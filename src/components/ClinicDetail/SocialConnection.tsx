'use client'
import insta from '@/assets/insta.png'
import connect1 from '@/assets/connect1.png'
import left from '@/assets/left.png'
import right from '@/assets/right.png'
import Image from 'next/image'
import Slider from "react-slick";

const NextArrow = ({ onClick }: any) => (
    <button className='absolute right-0 top-[-48%]' onClick={onClick}>
        <Image width={16} height={16} src={right} alt="" />
    </button>
);

const PrevArrow = ({ onClick }: any) => (
    <button className='absolute right-[30px] top-[-48%]' onClick={onClick}>
        <Image width={16} height={16} src={left} alt="" />
    </button>
);

type SocialConnectionProps = {
    step: number;
};


const SocialConnection: React.FC<SocialConnectionProps> = () => {

    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
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
        <>
            <div className='mt-[31px]'>
                <div>
                    <h3 className='text-primary text-[20px] prompt-medium '>Stay Connected</h3>
                    <p className='flex gap-1 items-center mb-[11px]'>
                        <Image width={16} height={16} className='' src={insta} alt="" />
                        <span className='text-sm text-[#000000]  font-roboto '>@republicasmiles</span>
                    </p>
                    <div>
                        <div className='text-[#1f1a39] text-sm leading-4 flex gap-4 '>
                            <p> <span className='font-bold'>3925</span> Posts</p>
                            <p><span className='font-bold'>169260</span> Followers</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="slider-container mt-[12px]">
                <Slider {...settings}>
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21].map((data) => (
                        <div key={data}>
                            <Image width={97} height={100} className='mb-[11px]' src={connect1} alt="" />
                        </div>
                    ))}

                </Slider>
            </div>
        </>
    )
}

export default SocialConnection


