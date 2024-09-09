'use client'

import WorthConsidering from '@/components/HighlitedDestination/WorthConsidering'
import { useParams } from 'next/navigation'
import React from 'react'

const HighlitedPage = () => {
    const { id }: any = useParams()

    return (
        <div>
            <WorthConsidering id={id} />
        </div>
    )
}

export default HighlitedPage