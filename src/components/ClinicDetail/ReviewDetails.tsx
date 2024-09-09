import React from 'react'
import plus from '@/assets/plus.png'
import minus from '@/assets/minus.png'
import Image from 'next/image'
import premium from '@/assets/premium.png';


const ReviewDetails = () => {
  return (
    <>
      <>
        {/* review 1 */}
        <div>
          <h3 className=' text-sm text-primary prompt-medium '>Smiling more than ever! Thanks, Dr. Kawasaki</h3>
          <div className='flex justify-between items-center'>
            <span className='text-[#707071] text-[12px] prompt-light mb-2  '>Nina G.</span>
            <div className='flex gap-2 items-center'>
              <p className='text-sm text-primary prompt-medium  '>Excellent</p>
              <button className='bg-[#f0f0f0] text-[#1e1f26]  text-sm  prompt-regular rounded-[100px] w-[60px] h-[32px] '>9.5</button>
            </div>
          </div>
          {/*  */}
          <div className='flex justify-between items-start'>
            <p className='text-sm text-primary prompt-light mb-[21px]'>Exactly as advertised, I was in and out seamlessly with no waiting, and I couldnt be happier with my smile!</p>
            <p className='flex items-center'> <Image src={premium} alt="" /> <span className='prompt-light text-[12px] text-[#707071] '>Real JetPatient Review</span></p>

          </div>

          <div className='flex justify-between items-end mb-[10px]'>
            <ul className='mb-4'>
              <li className='flex gap-2 items-center mb-1'>
                <Image width={8} height={8} src={plus} alt="" />
                <span className='text-[12px] prompt-light text-primary'>Professional Staff</span>
              </li>
              <li className='flex gap-2 items-center mb-1'>
                <Image width={8} height={8} src={plus} alt="" />
                <span className='text-[12px] prompt-light text-primary'>Modern Clinic</span>
              </li>
              <li className='flex gap-2 items-center mb-1'>
                <Image width={8} height={8} src={plus} alt="" />
                <span className='text-[12px] prompt-light text-primary'>Great Location</span>
              </li>
            </ul>
            <div>
              <p className='text-sm text-[#707071] prompt-light '>Reviewed on <br />
                20 September, 2024
              </p>
            </div>
          </div>
        </div>

        <div className='w-full h-[1px] bg-[#cfcfd0]'></div>
        {/* review 2 */}
        <div className='pt-[24px]'>
          <h3 className=' text-sm text-primary prompt-medium '>Better than my hometown dentist! </h3>
          <div className='flex justify-between items-center'>
            <span className='text-[#707071] text-[12px] prompt-light mb-2  '>Anasheh E.</span>
            <div className='flex gap-2 items-center'>
              <p className='text-sm text-primary prompt-medium  '>Excellent</p>
              <button className='bg-[#f0f0f0] text-[#1e1f26]  text-sm  prompt-regular rounded-[100px] w-[60px] h-[32px] '>9.5</button>
            </div>
          </div>
          {/* <p className='text-sm text-primary prompt-light mb-2'>I was hesitant at first, but honestly found that my experience here was head and shoulders above anything <br /> Ive experienced before!</p>
           */}
          <div className='flex justify-between items-start'>
            <p className='text-sm text-primary prompt-light mb-2'>I was hesitant at first, but honestly found that my experience here was head and shoulders above anything <br /> Ive experienced before!</p>
            <p className='flex items-center'> <Image src={premium} alt="" /> <span className='prompt-light text-[12px] text-[#707071] '>Real JetPatient Review</span></p>

          </div>

          <div className='flex justify-between items-end mb-[10px]'>
            <ul className='mb-4'>
              <li className='flex gap-2 items-center mb-1'>
                <Image width={8} height={8} src={minus} alt="" />
                <span className='text-[12px] prompt-light text-primary'>Check-In Delay</span>
              </li>
            </ul>
            <div>
              <p className='text-sm text-[#707071] prompt-light '>Reviewed on <br />
                10 September, 2024
              </p>
            </div>
          </div>
        </div>
      </>

    </>
  )
}

export default ReviewDetails