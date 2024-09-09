import React from 'react'
import SocialConnection from './SocialConnection'

const Certifications = ({ clinicResults }: any) => {
  return (
    <>
      <div className='grid grid-cols-12 mb-[36px]'>
        <div className="col-span-9">

          <div className='mb-5'>
            <h3 className='text-xl prompt-medium text-[#1e1f26] mt-5'>Joint Commission International (JCI) Accreditation</h3>
            <p className='text-xm prompt-light text-[#0d0d0d] leading-[18px] mt-[9px] '>Joint Commission International (JCI) accreditation is about patient safety and quality care. It signifies that a <br /> healthcare organization meets rigorous international standards. For potential patients, understanding JCI <br />  accreditation means knowing that the hospital or healthcare facility is committed to providing the highest <br />  level of care and safety protocols. Its about trust and assurance that your health and well-being are in  <br /> good hands.</p>
          </div>
          <div className='mb-5'>
            <h3 className='text-xl prompt-medium text-[#1e1f26] mt-5'>International Society of Aesthetic and Plastic Surgeons (ISAPS)</h3>
            <p className='text-xm prompt-light text-[#0d0d0d] leading-[18px] mt-[9px] '>The International Society of Aesthetic Plastic Surgery (ISAPS) is a global organization dedicated to  <br /> promoting excellence in aesthetic plastic surgery worldwide. For potential patients, knowing that a  <br /> surgeon is affiliated with ISAPS means they adhere to high ethical standards, ongoing education, and best <br />  practices in aesthetic surgery. Its about confidence in the expertise and professionalism of your surgeon, <br />  ensuring that your cosmetic procedures are performed with the utmost skill and safety.</p>
          </div>
          <div className='mb-5'>
            <h3 className='text-xl prompt-medium text-[#1e1f26] mt-5'>Medical Travel Association (MTA)</h3>
            <p className='text-xm prompt-light text-[#0d0d0d] leading-[18px] mt-[9px] '>The Medical Travel Association (MTA) is a global non-profit organization dedicated to promoting high-quality  <br /> healthcare services for medical travelers. For potential patients considering medical travel, MTA <br />  accreditation signifies that a healthcare provider or facility meets rigorous standards for patient care, <br />  safety, and ethical practices. Choosing an MTA-accredited provider offers peace of mind, knowing that <br />  youre accessing world-class medical care and services, tailored to your specific needs, regardless of  <br /> geographical boundaries. Its about embarking on a journey to better health with confidence and <br />  assurance.</p>
          </div>
        </div>
        <div className="col-span-3">
          <SocialConnection step={0} />
        </div>
      </div>


    </>
  )
}

export default Certifications