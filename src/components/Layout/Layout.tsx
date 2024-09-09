import React from 'react'
import Navbar from "@/shared/Navbar";
import Footer from "@/shared/Footer";
import { SelectedProcedureProvider } from '@/context/ProcedureContext';
import { CareTypeProvider } from '@/context/CareTypeProvider';

const Layout = ({ children }: any) => {
    return (
        <div>
            <CareTypeProvider>

                <SelectedProcedureProvider>
                    <Navbar />
                    {children}
                    <Footer />
                </SelectedProcedureProvider>
            </CareTypeProvider>
        </div>
    )
}

export default Layout