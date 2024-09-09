import Image from 'next/image'
import React, { useRef, useState } from 'react';
import doctor1 from '@/assets/doctor1.png'
import doctor2 from '@/assets/doctor2.png'
import d1 from '@/assets/d1.png'
import d2 from '@/assets/d2.png'
import d3 from '@/assets/d3.png'
import d4 from '@/assets/d4.png'
import d5 from '@/assets/d5.png'
import d6 from '@/assets/d6.png'
import d7 from '@/assets/d7.png'
import dropdown from '@/assets/dropdown.png'
import SocialConnection from './SocialConnection';

type CliniciansProps = {
  step: number; // The step prop is of type number
  clinicResults: Record<string, any>
};
const Clinicians: React.FC<CliniciansProps> = ({ step, clinicResults }) => {

  const [open, setOpen] = useState(false)
  const [educationOpen, setEducationOpen] = useState(false)
  const [postgraduate, setPostgraduateOpen] = useState(false)
  const [board, setBoardOpen] = useState(false)
  const [professional, setProfessionalOpen] = useState(false)
  const [hospital, setHospitalOpen] = useState(false)
  const rotationStyle = open ? { transform: 'rotate(180deg)' } : {};

  const videoRef2 = useRef<HTMLVideoElement>(null);

  const handleModalClose2 = () => {
    if (videoRef2.current) {
      videoRef2.current.pause();
      videoRef2.current.currentTime = 0;
    }
  };

  console.log(clinicResults, "clinicians");

  const { first_name, last_name, bio, years_experience, languages, education } = clinicResults?.clinician

  return (
    <>
      <div className='grid grid-cols-12 mb-[36px] gap-5'>
        <div className="col-span-9">
          <div className='flex gap-[10px]'>
            <div>

              <Image width={115} height={103} src={doctor1} className='mt-[7px] mb-[5px]' alt="" />

              <p className='mb-2 text-sm text-[#000000] '>{first_name} {last_name}</p>

              <button onClick={() => {
                const modalElement = document.getElementById('my_modal4');
                if (modalElement) {
                  const dialogElement = modalElement as HTMLDialogElement;
                  dialogElement.showModal();
                } else {
                  console.error('Modal element not found');
                }
              }} className='prompt-medium' style={styles.Button}> <svg style={styles.Icon} viewBox="0 0 24 24">
                  <path d="M0 0h24v24H0z" fill="none">
                  </path>
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z">
                  </path>
                </svg>Watch Interview</button>

              <dialog id="my_modal4" className="modal z-50" onClose={handleModalClose2}>
                <div className="modal-box p-0">
                  <div className='relative'>
                    <video ref={videoRef2} width="100%" height="100%" loop={true} controls>
                      <source src="/song2.mp4" type="video/mp4" />
                    </video>
                  </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                  <button>close</button>
                </form>
              </dialog>


            </div>
            {/* detailsG */}
            <div className='pt-[17px] flex justify-between w-full '>
              <div>
                <div className=''>
                  <p className='prompt-light mb-[11px] w-3/4  text-sm text-[#000000] '>
                    {bio}
                  </p>
                </div>
                {/* details accordion */}
                <div className=''>
                  <div className='flex gap-[10px] items-center mb-[11px]'>
                    <Image width={16} height={16} src={d1} alt="" />
                    <div>
                      <h3 className='prompt-medium text-sm text-[#000000]'>{years_experience} Years of Experience</h3>
                    </div>
                  </div>


                  <div className='flex justify-between items-start cursor-pointer'>
                    <div>
                      <div className='flex gap-[10px] items-center' onClick={() => setOpen(!open)}>
                        <Image width={16} height={16} src={d2} alt="" />
                        <div>
                          <h3 className='prompt-medium text-sm text-[#000000]'>Languages</h3>
                        </div>
                      </div>

                      {
                        open && <div className='prompt-light text-sm text-[#000000] mt-[11px]'>
                          {
                            languages.map((language: any) => (
                              <p key={language}>{language}</p>
                            ))
                          }
                        </div>
                      }
                    </div>
                    <Image
                      width={16}
                      height={16}

                      className={`${open ? 'rotate-180' : ''}`} // Assuming you have a CSS class for rotation
                      src={dropdown}
                      alt=""
                      style={rotationStyle} // Apply the rotation style conditionally
                    />
                  </div>

                  <div className='flex justify-between items-start cursor-pointer mt-[15px] mb-4'>
                    <div>
                      <div className='flex gap-[10px] items-center' onClick={() => setEducationOpen(!educationOpen)}>
                        <Image width={16} height={16} src={d3} alt="" />
                        <div>
                          <h3 className='prompt-medium text-sm text-primary'>Education</h3>
                        </div>
                      </div>
                      {
                        educationOpen && <>
                          {education.map((educa: any) => (
                            <>
                              <p className='prompt-light text-sm text-[#000000] mt-[11px] mb-2'>
                                {educa?.level} : {educa?.university}, {educa?.year}</p>
                            </>
                          ))}
                        </>
                      }
                    </div>
                    <Image
                      width={16}
                      height={16}

                      className={`${open ? 'rotate-180' : ''}`}
                      src={dropdown}
                      alt=""
                      style={rotationStyle}
                    />
                  </div>

                  <div className='flex justify-between items-start cursor-pointer mt-[15px] mb-4'>
                    <div>
                      <div className='flex gap-[10px] items-center' onClick={() => setPostgraduateOpen(!postgraduate)}>
                        <Image width={16} height={16} src={d4} alt="" />
                        <div>
                          <h3 className='prompt-medium text-sm text-primary'>Postgraduate Education</h3>
                        </div>
                      </div>
                      {
                        postgraduate && <p className='prompt-light text-sm text-[#000000] mt-[11px]'>Undergraduate: Biochemistry / Spanish Double Degree, 2001 <br /> <br />
                          Dentistry: DDS, Indiana University School of Dentistry, 2005</p>
                      }
                    </div>
                    <Image
                      width={16}
                      height={16}

                      className={`${open ? 'rotate-180' : ''}`}
                      src={dropdown}
                      alt=""
                      style={rotationStyle}
                    />
                  </div>
                  <div className='flex justify-between items-start cursor-pointer mt-[15px] mb-4'>
                    <div>
                      <div className='flex gap-[10px] items-center' onClick={() => setBoardOpen(!board)}>
                        <Image width={16} height={16} src={d5} alt="" />
                        <div>
                          <h3 className='prompt-medium text-sm text-primary'>Board Certifications</h3>
                        </div>
                      </div>
                      {
                        board && <p className='prompt-light text-sm text-[#000000] mt-[11px]'>Undergraduate: Biochemistry / Spanish Double Degree, 2001 <br /> <br />
                          Dentistry: DDS, Indiana University School of Dentistry, 2005</p>
                      }
                    </div>
                    <Image
                      width={16}
                      height={16}

                      className={`${open ? 'rotate-180' : ''}`}
                      src={dropdown}
                      alt=""
                      style={rotationStyle}
                    />
                  </div>
                  <div className='flex justify-between items-start cursor-pointer mt-[15px] mb-4'>
                    <div>
                      <div className='flex gap-[10px] items-center' onClick={() => setProfessionalOpen(!professional)}>
                        <Image width={16} height={16} src={d6} alt="" />
                        <div>
                          <h3 className='prompt-medium text-sm text-primary'>Professional Associations</h3>
                        </div>
                      </div>
                      {
                        professional && <>
                          {education.map((educa: any) => (
                            <>
                              <p className='prompt-light text-sm text-[#000000] mt-[11px]'>
                                {educa?.level}:{educa?.university}, {educa?.year}</p>
                            </>
                          ))}
                        </>
                      }
                    </div>
                    <Image
                      width={16}
                      height={16}

                      className={`${open ? 'rotate-180' : ''}`}
                      src={dropdown}
                      alt=""
                      style={rotationStyle}
                    />
                  </div>
                  <div className='flex justify-between items-start cursor-pointer mt-[15px]'>
                    <div>
                      <div className='flex gap-[10px] items-center' onClick={() => setHospitalOpen(!hospital)}>
                        <Image width={16} height={16} src={d7} alt="" />
                        <div>
                          <h3 className='prompt-medium text-sm text-primary'>Hospital Privileges</h3>
                        </div>
                      </div>
                      {
                        hospital && <p className='prompt-light text-sm text-[#000000] mt-[11px]'>Undergraduate: Biochemistry / Spanish Double Degree, 2001 <br /> <br />
                          Dentistry: DDS, Indiana University School of Dentistry, 2005</p>
                      }
                    </div>
                    <Image
                      width={16}
                      height={16}

                      className={`${open ? 'rotate-180' : ''}`}
                      src={dropdown}
                      alt=""
                      style={rotationStyle}
                    />
                  </div>

                </div>
              </div>


            </div>

          </div>
          {/* second doctor */}

        </div>
        <div className="col-span-3">
          <SocialConnection step={step} />
        </div>

      </div>
    </>
  )
}

export default Clinicians

const styles: any = {
  Button: {
    cursor: 'pointer',
    top: '802px',
    left: '52px',
    width: '135px',
    height: '30px',
    padding: '0px 8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    gap: '6px',
    border: '0',
    boxSizing: 'border-box',
    borderRadius: '16px',
    backgroundColor: '#0cffff',
    color: '#000000',
    fontSize: '12px',
    lineHeight: '16px',
    outline: 'none',
  },
  Icon: {
    fontSize: '18px',
    width: '18px',
    height: '18px',
    color: '#000000',
    fill: '#000000',
  },
};
