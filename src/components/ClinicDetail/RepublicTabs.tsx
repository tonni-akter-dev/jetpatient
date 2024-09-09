'use client'
import Overview from './Overview'
import Clinicians from './Clinicians'
import TabsButton from './TabsButton'
import Videos from './Videos'
import Photos from './Photos'

import love_icon from '@/assets/love_icon.png'
import Image from 'next/image'
import Certifications from './Certifications'
import Consultation from './Consultation'

const RepublicTabs = ({ step, setStep, clinicResults, clinicProcedureResults }: any) => {

    return (
        <div className='container' >
            <div className='mb-[35px]  flex flex-wrap gap-[101px] items-center  relative'>
                <div>
                    <div className='flex items-center gap-2'>
                        <h3 className='text-primary text-[24px] prompt-semibold '>{clinicResults?.clinic?.name} </h3>
                        <Image src={love_icon} alt="love_icon" />
                        <span className='text-sm text-[#000000] leading-4'>Save</span>
                    </div>
                    <p className=' text-primary text-sm prompt-light'>Top-Rated Modern Dental Clinic, In The Heart of Mexico City</p>
                </div>
                <div className='flex  gap-[46px]'>
                    <button className=' bg-transparent border border-[#052d4b] hover:bg-[#052d4b] hover:text-white   rounded-[8px] px-[20px] h-[36px] text-[#052d4b] text-base prompt-medium '>Check Availability</button>

                    <button onClick={() => setStep(5)} className=' bg-[#0acaff] border transition-all ease-in-out duration-300 hover:text-[#0acaff]  border-[#0acaff] hover:bg-white rounded-[8px] px-[20px] h-[36px] text-black text-base prompt-medium '>Book Consultation</button>
                </div>
            </div>
            <div className='grid grid-cols-12 gap-0' >
                <div className='col-span-12'>
                    <TabsButton step={step} setStep={setStep} />
                    {
                        step === 0 && <Overview clinicProcedureResults={clinicProcedureResults} clinicResults={clinicResults} step={step} />
                    }
                    {
                        step === 1 && <Clinicians clinicResults={clinicResults} step={step} />
                    }
                    {
                        step === 2 && <Certifications clinicResults={clinicResults} />
                    }
                    {
                        step === 3 && <Videos clinicResults={clinicResults} />
                    }
                    {
                        step === 4 && <Photos clinicResults={clinicResults} />
                    }
                    {
                        step === 5 && <Consultation clinicResults={clinicResults} />
                    }
                </div>

            </div>

        </div>
    )
}

export default RepublicTabs