import React from 'react'

const PatientJourney = () => {
    return (
        <div className='text-center mt-[26px] '>
            <h2 className='text-xl leading-6  mb-3 prompt-medium text-[#080705]'>Your JetPatient Journey</h2>
            <div>
                <ul className='flex gap-[29px] justify-center '>
                    <li className='text-[#080705] text-base prompt-medium '>Book Consult</li>
                    <li className='text-[#080705] text-base prompt-medium '>Confirm Booking</li>
                    <li className='text-[#707071] text-base prompt-medium'>Check-In</li>
                </ul>
                <div className='flex gap-[2px] justify-center mt-5 '>
                    <div className='h-[19px] w-[80px] bg-[#2afee0] '></div>
                    <div className='h-[19px] w-[80px] bg-[#2afee0] '></div>
                    <div className='h-[19px] w-[80px] bg-[#2afee0] '></div>
                    <div className='h-[19px] w-[80px] bg-[#eeeeff] '></div>
                    <div className='h-[19px] w-[80px] bg-[#eeeeff] '></div>
                </div>
                <ul className='flex gap-[29px] justify-center mt-5'>
                    <li className='text-[#080705] text-base prompt-medium '>Meet Clinician</li>
                    <li className='text-[#707071] text-base prompt-medium'>Payment</li>
                </ul>
            </div>
        </div>
    )
}

export default PatientJourney