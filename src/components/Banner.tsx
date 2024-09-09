'use client'
import ClinicSearch from './Search/ClinicSearch'

const Banner = () => {



    return (
        <div className='bg-banner banner_bg '>
            <div className="text-center text_opacity lg:px-0 px-5 ">
                <h1 className='text-[#032d4b] lg:text-[40px] text-[30px] lg:leading-[60px] prompt-semibold mb-[7px]'>Better Care. Anywhere.</h1>
                <p className='text-[#032d4b] text-[20px] leading-[30px] prompt-regular mb-[27px] '>
                    Join the millions of people saving thousands on world-class care at best-in-class clinics.
                    <br className='lg:block hidden' />  Destinations youll love. Financing to make it easy.</p>
            </div>

            <ClinicSearch />
        </div>
    )
}

export default Banner