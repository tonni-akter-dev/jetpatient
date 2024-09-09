import React from 'react'
import SearchForms from './SearchForms'
import SearchResults from './SearchResults'
import ProcedureFilter from './ProcedureFilter'

const ClinicSearchPage = () => {
    return (
        <>
            <div className='grid grid-cols-12 gap-[48px] me-[64px]'>
                <div className='col-span-4 '>
                    <div className=''>
                        <SearchForms />
                        <ProcedureFilter />
                    </div>
                </div>
                <div className='col-span-8'>
                    <SearchResults />
                </div>
            </div>

        </>
    )
}

export default ClinicSearchPage