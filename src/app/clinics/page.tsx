import React from 'react'
import ClinicSearch from '../../components/Search/ClinicSearch'
import ClinicsResults from '@/components/Clinics/ClinicsResults'

const Clinics = () => {

    return (
        <div className='mt-[36px] mb-[30px] '>
            <ClinicSearch />
            <ClinicsResults />
        </div>
    )
}

export default Clinics