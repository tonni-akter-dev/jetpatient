import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Select from 'react-select';

const customStyles = {
    control: (provided: any) => ({
        ...provided,
        border: 'none',
        boxShadow: 'none',
        height: 'auto',
        marginBottom: "-50px",
        '&:hover': {
            border: 'none',
        },
    }),

};
interface CountrySelectProps {
    handleCountryClick: (countryName: string) => void;
}
const CountrySelect: React.FC<CountrySelectProps> = ({ handleCountryClick }) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [options, setOptions] = useState([]);

    useEffect(() => {
        axios.get('https://countriesnow.space/api/v0.1/countries')
            .then(response => {
                const countryOptions = response.data.data.map((country: any) => ({
                    value: country.country,
                    label: country.country,
                }));
                setOptions(countryOptions);
            })
            .catch(error => {
                console.error("There was an error fetching the country data!", error);
            });
    }, []);

    const handleCountryChange = (selectedOption: React.SetStateAction<null>) => {
        setSelectedOption(selectedOption);
    };
    return (
        <>
            <Select
                value={selectedOption}
                onChange={handleCountryChange}
                options={options}
                styles={customStyles}
                placeholder="Select country"
                className="custom-select text-[#707071] text-[14px] prompt-light leading-[22px] cursor-pointer"
            />
        </>
    );
};

export default CountrySelect;
