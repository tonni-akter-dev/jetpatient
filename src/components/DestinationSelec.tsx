import Image from 'next/image';
import { countries } from '@/utils/countrydata';

const DestinationSelec = () => {

    return (
        <div className='bg-white rounded-[26px] border border-[#505050] w-fit px-[37px] py-[25px] justify-center absolute z-40'>
            <h3 className='text-black text-sm prompt-medium mb-[18px] '>Search by destination</h3>
            <div className='grid grid-cols-3 gap-[20px]'>
                {countries.map((country, index) => (
                    <div key={index} className='cursor-pointer' >
                        <Image width={128} height={128} src={country.src} alt={country.name} />
                        <p className='text-sm text-[#707071] prompt-medium text-center mt-[6px] '>{country.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DestinationSelec;
