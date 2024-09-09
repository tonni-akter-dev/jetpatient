import React from 'react'
import ReviewProgress from './ReviewProgress'
import ReviewDetails from './ReviewDetails'

const Reviews = () => {
    return (
        <div className='container  pb-[48px]'>
            <div className="grid grid-cols-12 gap-[80px]">
                <div className="lg:col-span-3 col-span-12 pt-[32px]">

                    <h3 className='text-[20px]  prompt-medium text-primary mb-[24px] '>Reviews</h3>
                    <h1 className='prompt-light text-[28px] text-primary mb-4 '>9.6/10</h1>
                    <ReviewProgress value={10} title="Clinic Experience" />
                    <ReviewProgress value={7} title="Facilities" />
                    <ReviewProgress value={9} title="Location" />
                    <ReviewProgress value={8} title="Comfort" />
                    <ReviewProgress value={9} title="Intake & Follow-Up" />
                </div>
                <div className="col-span-9 pt-[80px]">
                    <ReviewDetails />
                </div>
            </div>


        </div>
    )
}

export default Reviews