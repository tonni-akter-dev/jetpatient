"use client";
import React, { useState } from 'react'
import { DayPicker } from 'react-day-picker';
import "react-day-picker/dist/style.css";
import ConsultationDetails from './ConsultationDetails';

const Consultation = ({ clinicResults }: any) => {


  const [selected, setSelected] = useState<any>();

  const times = ['10:00 am', '10:30 am', '11:00 am', '11:30 am', '12:30 pm', '1:00 pm', '1:30 pm', '2:00 pm'];

  const [activeTime, setActiveTime] = useState(null);

  const handleClick = (time: any) => {
    setActiveTime(time);
    console.log(time);
  };

  return (
    <div>
      <h2 className='text-[#1e1f26] text-[32px] font-prompt font-bold mt-[21px] mb-[32px] '>Dental Veneers Consultation with Republica Smiles</h2>

      <div className="flex items-start gap-5 mb-5">
        <div>
          <div className="custom-datepicker">
            <DayPicker className="m-0" mode="multiple" selected={selected} onSelect={setSelected} />

            {/* details */}

            <ConsultationDetails />

          </div>

        </div>

        {/* time */}
        <div className="flex flex-col gap-2 border-r border-[#e5e5e5] pe-[20px] ">
          {times.map((time, index) => (
            <>
              <button
                key={index}
                className={`border border-[#0bffff] h-[33px] w-[120px] rounded-2xl prompt-medium text-[#1e1f26]
                 text-[12px] leading-4 flex justify-center items-center ${activeTime === time ? 'bg-[#0bffff]' : ''}`}
                onClick={() => handleClick(time)}
              >
                {time}
              </button>
            </>
          ))}
        </div>
        {/* booking information */}
        <div className=''>
          <form>
            <label className='text-[#1e1f26]  text-sm leading-4'>Please select a clinician from the dropdown below.</label>
            <div className='mt-4'>
              <select className='border border-[#1e1f26] text-[12px] p-2 leading-[14px] w-[548px] h-[38px]  rounded-2xl mb-3 '>
                <option value="#">Select Clinician</option>
                <option value="">Select Clinician</option>
                <option value="">Select Clinician</option>
                <option value="">Select Clinician</option>
              </select>
            </div>
            <label className='text-[#1e1f26]  text-sm leading-4 '>Please select addional opions or procedures from the dropdown below.</label>
            <div className='mt-4'>
              <select className='border border-[#1e1f26] text-[12px] leading-[14px] w-[548px] h-[38px]  rounded-2xl mb-[26px]'>
                <option value="#">Select Clinician</option>
                <option value="">Select Clinician</option>
                <option value="">Select Clinician</option>
                <option value="">Select Clinician</option>
              </select>
            </div>
            <label className='text-[#1e1f26]  text-sm leading-4 '>Please provide any additional details (questions, concerns, etc)</label> <br />
            <textarea className='p-2 h-[125px] border border-[#1e1f26] mt-4     rounded-2xl w-full' ></textarea>
            <div className='w-full flex justify-end mt-2'>
              <button type="submit" className='bg-[#0cffff] hover:bg-white hover:text-black transition-all ease-in-out duration-300 border border-[#0cffff] max-w-[207px] w-full h-[46px] rounded-[100px]  text-black  prompt-medium  '>Schedule Consultation</button>
            </div>
          </form>
        </div>

      </div>
    </div>
  )
}

export default Consultation;