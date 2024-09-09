
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { useCareType } from '../../context/CareTypeProvider';

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

const CareTypeModal = ({ setProcedure }: any) => {
  
  const { setSelectedCareType } = useCareType();
  const [selectedOption, setSelectedOption] = useState(null);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    axios.get('https://api.jetpatient.dev/api/proceduretypes/?format=json')
      .then(response => {
        const careTypeOptions = response.data.results.map((data: any) => ({
          value: data.id,
          label: data.name,
        }));
        setOptions(careTypeOptions);
      })
      .catch(error => {
        console.error("There was an error fetching the care type data!", error);
      });
  }, []);

  const handleCareTypeChange = (selectedOption: any) => {
    setSelectedOption(selectedOption);

    console.log('Selected ID:', selectedOption.value);
    localStorage.setItem('selectedCareTypeID', selectedOption.value);

    // Step 5: Update context value
    setSelectedCareType(selectedOption);
    setProcedure(false);
  };

  return (
    <Select
      value={selectedOption}
      onChange={handleCareTypeChange}
      options={options}
      styles={customStyles}
      placeholder="Choose here"
      className="custom-select text-[#707071] text-[14px] prompt-light w-fit leading-[22px] cursor-pointer"
    />
  );
};

export default CareTypeModal;
