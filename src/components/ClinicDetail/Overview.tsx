import React from 'react'
import a1 from '@/assets/a1.png'
import a2 from '@/assets/a2.png'
import a3 from '@/assets/a3.png'
import a4 from '@/assets/a4.png'
import a5 from '@/assets/a5.png'
import a6 from '@/assets/a6.png'
import Image from 'next/image'
import JourneyCard from './JourneyCard'

const Overview = ({ clinicResults, clinicProcedureResults }: any) => {

  return (
    <>

      <div className="grid grid-cols-12 mb-[67px]">
        <div className='col-span-8'>
          <div>
            <div>
              <h3 className='text-[20px] text-primary prompt-medium  mt-[20px] mb-2'>About</h3>
              <div>
                <p className='text-[#171d1e] text-sm prompt-light mb-3 '>
                  {clinicResults?.clinic?.about ? clinicResults?.clinic?.about : "Our mission is to provide the most accurate treatment at the highest standards in dentistry treatments, especially in aesthetic applications and maxillofacial surgery treatments. As the Republica Smiles team serving in this direction, we closely follow the latest professional developments and apply evidence-based scientific treatments."}
                </p>
              </div>
            </div>

            {/* clinic overview */}
            <div>
              <h5 className='text-primary text-[20px] prompt-medium leading-[30px] '>Clinic Overview</h5>
              <div className='flex mb-[20px]'>
                <ul className='flex flex-col gap-3 mt-3'>
                  <li className='flex  gap-3 items-center'>
                    <Image height={18} width={18} src={a1} alt="" />
                    <span className='text-sm prompt-light text-primary '>Free Wifi</span>
                  </li>
                  <li className='flex  gap-3 items-center'>
                    <Image height={18} width={18} src={a2} alt="" />
                    <span className='text-sm prompt-light text-primary '>Air conditioning</span>
                  </li>
                  <li className='flex  gap-3 items-center'>
                    <Image height={18} width={18} src={a3} alt="" />
                    <span className='text-sm prompt-light text-primary '>Private bathroom</span>
                  </li>
                  <li className='flex  gap-3 items-center'>
                    <Image height={18} width={18} src={a4} alt="" />
                    <span className='text-sm prompt-light text-primary '>Doctor experience [10+ Years]</span>
                  </li>

                </ul>
                <ul className='flex flex-col gap-3 mt-3'>
                  <li className='flex  gap-3 items-center'>
                    <Image height={18} width={18} src={a5} alt="" />
                    <span className='text-sm prompt-light text-primary '>Free parking</span>
                  </li>
                  <li className='flex  gap-3 items-center'>
                    <Image height={18} width={18} src={a6} alt="" />
                    <span className='text-sm prompt-light text-primary '>Dedicated concierge</span>
                  </li>
                </ul>
              </div>
              {/* procedures */}
              <div>
                <h5 className='text-primary text-[20px] prompt-medium leading-[30px] mb-[11px]'>Procedures</h5>
                <div>

                  {
                    // clinicProcedureResults?.categories?.map((category: any) => (
                    //   <React.Fragment key={category.id}>
                        <button className='bg-[#1e1f26]  me-[13px] h-[22px] rounded-[12px] text-[12px] text-[#ffffff] prompt-medium outline-none px-[8px] '>{clinicProcedureResults?.name}</button>
                    //   </React.Fragment>
                    // ))
                  }

                  {/* <button className='bg-[#1e1f26] me-[7px]  h-[22px] rounded-[12px] text-[12px] text-[#ffffff] prompt-medium outline-none px-[8px] '>Dental Crowns</button>
                  <button className='bg-[#1e1f26]  me-[8px] h-[22px] rounded-[12px] text-[12px] text-[#ffffff] prompt-medium outline-none px-[8px] '>Dental Bridge</button>
                  <button className='bg-[#1e1f26] h-[22px] rounded-[12px] text-[12px] text-[#ffffff] prompt-medium outline-none px-[8px] '>Dental Veneers</button> <br /> */}

                  {/* <button className='mt-[12px] me-[11px] bg-[#1e1f26] h-[22px] rounded-[12px] text-[12px] text-[#ffffff] prompt-medium outline-none px-[8px] '>Dental Bone Graft</button>
                  <button className='mt-[12px] me-[13px] bg-[#1e1f26] h-[22px] rounded-[12px] text-[12px] text-[#ffffff] prompt-medium outline-none px-[8px] '>Dental Bonding</button>
                  <button className='mt-[12px] bg-[#1e1f26] h-[22px] rounded-[12px] text-[12px] text-[#ffffff] prompt-medium outline-none px-[8px] '>All-On-4 Dental Implants</button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-4">
          <JourneyCard clinicResults={clinicResults} />

          {/* <SocialConnection step={step} /> */}
        </div>
      </div>
    </>
  )
}

export default Overview 
