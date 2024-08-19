import React, {useState} from 'react';
import Select from 'react-select'

const  options = [
    { value: 'chocolate', label: 'KSA' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
];
export default function Dropdown() {
    const [isClearable, setIsClearable] = useState(true);
    const [isSearchable, setIsSearchable] = useState(true);
    const [isDisabled, setIsDisabled] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isRtl, setIsRtl] = useState(false);
    return (
        <Select
            isDisabled={isDisabled}
            isLoading={isLoading}
            isClearable={isClearable}
            isRtl={isRtl}
            isSearchable={isSearchable}
            name="color"
            value="chocolate"
            options= {options}
        />
  );
}