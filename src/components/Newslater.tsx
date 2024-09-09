import Image from 'next/image'
import React from 'react';
import user from '@/assets/user.png'

const Newslater = () => {
    return (
        <div className='container mb-[48px]  '>
            <div className='bg-[#ffffff] shadow-card px-[30px] lg:mx-0 mx-5 py-4 rounded-[20px]'>
                <div className='flex lg:flex-row flex-col lg:gap-0 gap-5 justify-between items-center' >
                    <div className="flex flex-wrap items-center">
                        <Image height={49} width={62} className='me-[42px]' src={user} alt="email" />
                        <div>
                            <h3 className='text-[#1e1f26] text-base prompt-semibold mb-2 '>Hear from Real People. Join the Discussion. All In the JetPatient Community.</h3>
                            <p className='text-[#1e1f26] text-sm prompt-light leading-[18px]  '>The JetPatient community is your destination to learn and discuss everything you ever wanted to <br /> know about your health and wellness. AMAs, discussions, recommendations. Its all here.
                            </p>
                        </div>
                    </div>

                    <button className='px-2 border border-[#0acaff] text-[#0acaff] rounded-[100px] bg-[rgba(255,255,255,0)] text-sm font-prompt leading-[18px] cursor-pointer h-[38px] w-[216px] hover:bg-[#0acaff] hover:text-white transition-all duration-500 ease-in-out '>JetPatient Community</button>
        

                </div>


            </div>

        </div>
    )
}

export default Newslater
