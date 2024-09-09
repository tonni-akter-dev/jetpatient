'use client'
import ClinicsResults from '@/components/Clinics/ClinicsResults'
import ClinicSearch from '@/components/Search/ClinicSearch'
import { useParams } from 'next/navigation'
import React, { useEffect } from 'react'

const ClinicPage = () => {

  const { id }: any = useParams()
  useEffect(() => {
    localStorage.setItem('clinicId', id)
  }, [id])
  
  return (
    <div className='mt-[36px] mb-[30px] '>
      <ClinicSearch />
      <ClinicsResults id={id} />
    </div>
  )
}

export default ClinicPage