'use client'
import React, { useEffect, useState } from 'react'
import ClinicHeader from './ClinicHeader';
import ClinicResultCards from './ClinicResultCards';
import { useSelectedProcedure } from '@/context/ProcedureContext';
import axios from 'axios';

const ClinicsResults = ({ id }: any) => {
  const { selectedProcedure } = useSelectedProcedure();

  console.log(selectedProcedure.id, "selectedProcedure from clinicresult card")

  const [clinicResults, setClinicResults] = useState<any>(null);

  useEffect(() => {
    axios.get(`https://api.jetpatient.dev/api/procedureoffered/?procedure=${selectedProcedure.id ? selectedProcedure.id : id}`)
      .then(response => {
        console.log(response.data.results, "clinic result page")
        setClinicResults(response?.data.results)
      })
      .catch(error => {
        console.error("There was an error fetching the country data!", error);
      });
  }, [id, selectedProcedure.id]);

  console.log(clinicResults, "clinicResults complete```````````````````````````````")
  return (
    <div className='container'>
      <ClinicHeader clinicResults={clinicResults} />
      <ClinicResultCards clinicResults={clinicResults} id={id} />
    </div>
  )
}

export default ClinicsResults