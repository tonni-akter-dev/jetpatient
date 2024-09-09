'use client'

import React, { useEffect, useState } from 'react'
import ClinicGallary from './ClinicGallary'
import RepublicTabs from './RepublicTabs'
import ProcedureOffered from './ProcedureOffered'
import Reviews from './Reviews'
import axios from 'axios'
import { isBrowser } from '@/utils/isBrowser'

const ClinicDetail = ({ id }: any) => {
    const [clinicId, setClinicId] = useState<string | null>(null);

    const [step, setStep] = useState<number>(0)
    useEffect(() => {
        if (isBrowser()) {
            const id = localStorage.getItem('clinicId');
            setClinicId(id);
        }
    }, []);

    const [clinicResults, setClinicResults] = useState<any>(null);

    useEffect(() => {
        axios.get(`https://api.jetpatient.dev/api/procedureoffered/?procedure=${clinicId}`)
            .then(response => {
                const results = response?.data?.results;
                const filteredItems = results.find((result: any) => result.id === id)
                setClinicResults(filteredItems)
                console.log('results from detail', filteredItems)
            })
            .catch(error => {
                console.error("There was an error fetching the country data!", error);
            });
    }, [clinicId, id]);

    const [clinicProcedureResults, setClinicProcedureResults] = useState<any>(null);

    useEffect(() => {
        axios.get(`https://api.jetpatient.dev/api/procedure/659d711b-490c-4c94-bf2e-a71a060a116e/`)
            .then(response => {
                const results = response?.data;
                setClinicProcedureResults(results)
            })
            .catch(error => {
                console.error("There was an error fetching the country data!", error);
            });
    }, [clinicId]);


    return (
        <>
            <ClinicGallary />

            <RepublicTabs clinicProcedureResults={clinicProcedureResults} clinicResults={clinicResults} step={step} setStep={setStep} />

            {step === 5 ?
                "" : <ProcedureOffered clinicResults={clinicResults} step={step} />
            }
            <Reviews />

        </>
    )
}

export default ClinicDetail