import React from 'react'
import PhotosSlider from './PhotosSlider'
import GallarySlider from './GallarySlider'


const Photos = ({ clinicResults }: any) => {

    return (

        <div className='mb-[28px]'>
            <PhotosSlider />
            <GallarySlider />

        </div>

    )
}

export default Photos