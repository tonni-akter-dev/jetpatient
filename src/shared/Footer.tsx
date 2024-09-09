// import React from 'react'
// import insta from '@/assets/instagram.svg'
// import facebook from '@/assets/facebook.svg'
// import youtube from '@/assets/youtube.svg'
// import tiktok from '@/assets/tiktok.svg'
// import Image from 'next/image'
// import Link from 'next/link'


// const Footer = () => {
//     return (
//         <div className='bg-[#033254]'>
//             <div className="container py-[32px] lg:px-[66px] px-[20px] ">
//                 <div className="flex lg:flex-row flex-col lg:justify-between justify-start lg:items-center lg:gap-0 gap-8">
//                     <div className=' text-start'>
//                         <h1 className='text-white text-xl prompt-medium leading-[30px]'>JetPatient</h1>
//                         <p className='text-white text-[12px] prompt-light leading-[16px]'>Better Care. Anywhre. <br className='lg:block hidden' />
//                             Your journey to better, cheaper, superior <br className='lg:block hidden' />
//                             health begins here</p>
//                         <p className='text-white text-[12px] prompt-light leading-[16px] mt-4 '>JetPatient, Inc. © 2024</p>
//                     </div>
//                     <div className='flex flex-wrap gap-[30px] lg:items-center'>
//                         <Link href={`#`}> <Image className='lg:w-[40px] lg:h-[40px] w-[20px] h-[20px]' src={insta} alt="insta" /></Link>
//                         <Link href={`#`}> <Image className='lg:w-[40px] lg:h-[40px] w-[20px] h-[20px]' src={facebook} alt="insta" /></Link>
//                         <Link href={`#`}> <Image className='lg:w-[40px] lg:h-[40px] w-[20px] h-[20px]' src={tiktok} alt="insta" /></Link>
//                         <Link href={`#`}> <Image className='lg:w-[40px] lg:h-[40px] w-[20px] h-[20px]' src={youtube} alt="insta" /></Link>
//                     </div>
//                     <div className='lg:text-right text-start'>
//                         <h1 className='text-white text-[12px] prompt-light leading-[16px] mb-2'>Help</h1>
//                         <div className='text-white text-[12px] prompt-light leading-[16px]'>
//                             <Link href={`#`}>  <p className='mb-2'>FAQ</p></Link>
//                             <Link href={`#`}>  <p className='mb-2'>Contact Us / Get Support</p></Link>
//                             <Link href={`#`}> <p className='mb-2'>Careers</p></Link>
//                             <Link href={`#`}> <p className='mb-2'>Legal | Terms & Conditions</p></Link>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Footer
import React from 'react'
import insta from '@/assets/instagram.svg'
import facebook from '@/assets/facebook.svg'
import youtube from '@/assets/youtube.svg'
import tiktok from '@/assets/tiktok.svg'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
    return (
        <div className='bg-[#033254] min-h-[100px] flex flex-col'>
            <div className="container py-[32px] lg:px-[66px] px-[20px] flex-grow">
                <div className="flex lg:flex-row flex-col lg:justify-between justify-start lg:items-center lg:gap-0 gap-8">
                    <div className='text-start'>
                        <h1 className='text-white text-xl prompt-medium leading-[30px]'>JetPatient</h1>
                        <p className='text-white text-[12px] prompt-light leading-[16px]'>Better Care. Anywhere. <br className='lg:block hidden' />
                            Your journey to better, cheaper, superior <br className='lg:block hidden' />
                            health begins here</p>
                        <p className='text-white text-[12px] prompt-light leading-[16px] mt-4 '>JetPatient, Inc. © 2024</p>
                    </div>
                    <div className='flex flex-wrap gap-[30px] lg:items-center'>
                        <Link href={`#`}> <Image className='lg:w-[40px] lg:h-[40px] w-[20px] h-[20px]' src={insta} alt="insta" /></Link>
                        <Link href={`#`}> <Image className='lg:w-[40px] lg:h-[40px] w-[20px] h-[20px]' src={facebook} alt="insta" /></Link>
                        <Link href={`#`}> <Image className='lg:w-[40px] lg:h-[40px] w-[20px] h-[20px]' src={tiktok} alt="insta" /></Link>
                        <Link href={`#`}> <Image className='lg:w-[40px] lg:h-[40px] w-[20px] h-[20px]' src={youtube} alt="insta" /></Link>
                    </div>
                    <div className='lg:text-right text-start'>
                        <h1 className='text-white text-[12px] prompt-light leading-[16px] mb-2'>Help</h1>
                        <div className='text-white text-[12px] prompt-light leading-[16px]'>
                            <Link href={`#`}>  <p className='mb-2'>FAQ</p></Link>
                            <Link href={`#`}>  <p className='mb-2'>Contact Us / Get Support</p></Link>
                            <Link href={`#`}> <p className='mb-2'>Careers</p></Link>
                            <Link href={`#`}> <p className='mb-2'>Legal | Terms & Conditions</p></Link>
                        </div>
                    </div>
                    {/* <div className='lg:text-right text-start'>
                        <h1 className='text-white text-[12px] prompt-light leading-[16px] mb-2'>Help</h1>
                        <div className='text-white text-[12px] prompt-light leading-[16px]'>
                            <Link href={`#`}>  <p className='mb-2'>FAQ</p></Link>
                            <Link href={`#`}>  <p className='mb-2'>Customer service</p></Link>
                            <Link href={`#`}> <p className='mb-2'>How to guide</p></Link>
                            <Link href={`#`}> <p className='mb-2'>Contact us</p></Link>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Footer;
