import React from 'react'

const Loader = () => {
    return (
        <div className='flex justify-center my-[100px]'>
            <div className="w-12 h-12 rounded-full animate-spin
                    border-2 border-dashed border-blue-500 border-t-transparent"></div>
        </div>
    )
}

export default Loader