
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Select from 'react-select';

const customStyles = {
  control: (provided: any) => ({
    ...provided,
    border: 'none',
    boxShadow: 'none',
    '&:hover': {
      border: 'none',
    },
  }),

};

const ProcedureDropdown = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    axios.get('https://api.jetpatient.dev/api/proceduretypes/?format=json')
      .then(response => {
        const careTypeOptions = response.data.results.map((data: { name: any; }) => ({
          value: data.name,
          label: data.name,
        }));
        setOptions(careTypeOptions);
      })
      .catch(error => {
        console.error("There was an error fetching the care type data!", error);
      });
  }, []);

  const handleCareTypeChange = (selectedOption: React.SetStateAction<null>) => {
    setSelectedOption(selectedOption);
  };

  return (
    <Select
      value={selectedOption}
      onChange={handleCareTypeChange}
      options={options}
      styles={customStyles}
      placeholder="Choose here"
      className="custom-select text-[#707071] text-[14px] prompt-light leading-[22px] cursor-pointer"
    />
  );
};

export default ProcedureDropdown;
