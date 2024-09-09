import React from 'react'

const TabsButton = ({ setStep, step }: any) => {
    return (
        <div>
            <ul className='flex gap-[40px] border-b border-[#cfcfd0] pb-3 relative'>
                <li>
                    <button onClick={() => setStep(0)} className={step === 0 ?
                        'text-primary font-semibold active-border' : 'text-[#707071]  prompt-light '}>Overview</button>
                </li>
                <li>
                    <button onClick={() => setStep(1)} className={step === 1 ? 'text-primary font-semibold active-border' : 'text-[#707071]  prompt-light '}>Clinicians</button>
                </li>

                <li>
                    <button onClick={() => setStep(2)} className={step === 2 ? 'text-primary font-semibold active-border' : 'text-[#707071]  prompt-light '}>Certifications</button>
                </li>

                <li>
                    <button onClick={() => setStep(3)} className={step === 3 ? 'text-primary font-semibold active-border' : 'text-[#707071]  prompt-light '}>Videos</button>
                </li>
                
                <li>
                    <button onClick={() => setStep(4)} className={step === 4 ? 'text-primary font-semibold active-border' : 'text-[#707071]  prompt-light '}>Photos</button>
                </li>
                <li>
                    <button onClick={() => setStep(5)} className={step === 5 ? 'text-primary font-semibold active-border' : 'text-[#707071]  prompt-light '}>Consultation</button>
                </li>
            </ul>
        </div>
    )
}

export default TabsButton