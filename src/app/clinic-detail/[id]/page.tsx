'use client'
import ClinicDetail from '@/components/ClinicDetail/ClinicDetail'
import axios from 'axios'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const ClinicDetailPage = () => {
    const { id } = useParams()

    return (
        <>
            <ClinicDetail id={id} />
        </>
    )
}

export default ClinicDetailPage