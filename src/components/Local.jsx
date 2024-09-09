import React from 'react'

const Local = () => {
    return (
        <div className='bg-[#E6FAFF] pt-[30px] pb-[46px] flex flex-col justify-center   items-center mb-12 lg:px-0 px-3'>
            <h2 className='lg:text-[40px]  text-[30px] text-[#032d4b] font-prompt leading-[60px] font-semibold mb-2  '>JetPatient Local</h2>
            <p className='text-center lg:leading-[30px]  lg:text-xl text-base text-[#032d4b] mb-[14px] font-prompt'>Ready to book? Grab cancellations and empty appointments from leading clinics. <br />
                <span className='font-medium'> Save Money. Stay Local.</span></p>

            <button className='font-prompt  lg:h-[48px] h-[38px] bg-[#0acaff] px-2 
            w-[276px]  text-black text-lg font-medium leading-[24px] outline-none rounded-2xl border hover:text-[#0acaff] border-[#0acaff]  transition-all duration-500 ease-in-out hover:bg-white hover:border-[#0acaff]  '>See Local Options</button>
        </div>
    )
}

export default Local